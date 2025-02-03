"use server"

import { ContactFormSchema, sendEmail } from "@/lib/email"

export type ContactFormState = {
  error?: string
  success?: boolean
  message?: string
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    service: formData.get("service"),
  }

  const validatedFields = ContactFormSchema.safeParse(rawData)

  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten()
    return {
      error: Object.values(errors.fieldErrors).flat().join(", "),
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

