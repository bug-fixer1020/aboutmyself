import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = process.env.MONGODB_URI

console.log(
  'DB Connection URI check:',
  uri
    ? 'AVAILABLE (starting with ' + uri?.substring(0, 15) + '...)'
    : 'MISSING',
)

if (!uri) {
  console.error('CRITICAL: MONGODB_URI is missing from process.env')
  throw new Error('Please add your Mongo URI to .env')
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

let clientPromise

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  clientPromise = client.connect()
}

/**
 * Reusable function to connect to the database.
 * Returns the database instance.
 */
export async function connectToDatabase() {
  const connection = await clientPromise
  return connection.db(process.env.DATABSENAME || 'myselfdb')
}

export default clientPromise
