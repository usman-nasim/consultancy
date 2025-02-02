"use server"

import { ContactFormSchema, sendEmail } from "@/lib/email"

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    service: formData.get("service"),
  })

  if (!validatedFields.success) {
    return {
      error: "Invalid form data. Please check your inputs.",
    }
  }

  try {
    const result = await sendEmail(validatedFields.data)

    if (result.error) {
      return { error: result.error }
    }

    return {
      success: true,
      message: "Thank you for your message. We will get back to you soon!",
    }
  } catch (error) {
    return {
      error: "Something went wrong. Please try again later.",
    }
  }
}

