import { connectToDatabase } from '@/app/(connection)/dbconnection'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      )
    }

    // 1. Save to Database
    const db = await connectToDatabase()
    const collection = db.collection('alltexts')

    const result = await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    })

    // 2. Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASS,
      },
    })

    // 3. Prepare & Send "Thank You" Email
    const mailOptions = {
      from: `"Your Website Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting us!',
      text: `Hello ${name},

Thank you for reaching out! We have received your message and will get back to you shortly.

Best regards,
Your Website Team`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>Hello ${name},</h2>
          <p>Thank you for reaching out! We have received your message and our team will get back to you shortly.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 0.8em; color: #666;">This is an automated reply. Please do not reply directly to this email.</p>
        </div>
      `,
    }

    // We send the email without blocking the response for a faster user experience,
    // but in a production environment, you might want to await this or use a queue.
    try {
      await transporter.sendMail(mailOptions)
      console.log('Automated reply sent to:', email)
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // We don't return an error here because the message was already saved to the DB
    }

    return NextResponse.json(
      {
        message: `Message sent successfully. Thank you ${name}!`,
        id: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('API Route Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
