// components/custom/submitContactForm.ts
"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(
  _prevState: { message: string },
  formData: FormData
): Promise<{ message: string }> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // ✅ Temporarily use Resend's verified sender
      to: "d.cui@wustl.edu",         // 📬 Your inbox
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,                // ✅ <-- correct key
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>New Contact Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    })

    return { message: "Thanks! Your message was sent successfully." }
  } catch (error) {
    console.error("Email error:", error)
    return { message: "Oops! Something went wrong. Try again later." }
  }
}
