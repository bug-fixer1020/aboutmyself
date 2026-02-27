const { MongoClient, ServerApiVersion } = require('mongodb')

const uri =
  'mongodb+srv://hibarmanda_db_user:8Hvk3MbUYRP3oNPf@cluster0.fjyt877.mongodb.net/?appName=Cluster0'

console.log('URI from .env:', uri ? 'LOADED' : 'MISSING')

if (!uri) {
  console.log('Error: MONGODB_URI is not defined in .env')
  process.exit(1)
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function run() {
  try {
    console.log('Attempting to connect to MongoDB...')
    await client.connect()
    console.log('Successfully connected!')
    const db = client.db(process.env.DATABSENAME || 'myselfdb')
    const collection = db.collection('alltexts')
    const count = await collection.countDocuments()
    console.log('Document count in alltexts:', count)

    // Test insert
    const testResult = await collection.insertOne({
      test: true,
      date: new Date(),
    })
    console.log('Test insert result:', testResult.insertedId)
  } catch (error) {
    console.error('Connection Error:', error)
  } finally {
    await client.close()
    console.log('Connection closed.')
  }
}

run()
