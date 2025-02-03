"use server"

import { z } from "zod"

export const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  service: z.string().optional(),
})

export type ContactFormType = z.infer<typeof ContactFormSchema>

export async function sendEmail(data: ContactFormType) {
  // Import nodemailer inside the function
  const nodemailer = require("nodemailer")

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const { name, email, phone, subject, message, service } = data

  const mailOptions = {
    from: `"${name}" <${process.env.SMTP_EMAIL}>`,
    to: process.env.SMTP_EMAIL,
    replyTo: email,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ""}
          ${service ? `<p style="margin: 10px 0;"><strong>Service:</strong> ${service}</p>` : ""}
          <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
        </div>

        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
          <p style="margin: 0;"><strong>Message:</strong></p>
          <p style="margin: 10px 0; white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</p>
        </div>

        <div style="margin-top: 20px; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 10px;">
          This email was sent from the Burhan Master Minds Consultancy contact form.
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { error: "Failed to send email. Please try again later." }
  }
}
