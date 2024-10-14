import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import emailConfig from '@/config/email.json'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport(emailConfig)

  try {
    // Send email
    await transporter.sendMail({
      from: emailConfig.from,
      to: 'mason@dill.digital',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}