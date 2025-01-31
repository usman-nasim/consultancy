"use server"

import { z } from "zod"

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type State = {
  message?: string
  error?: string
}

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      error: "Invalid form data. Please check your inputs.",
    }
  }

  // Here you would typically send an email or save to a database
  // For now, we'll just simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    message: "Thank you for your message. We will get back to you soon!",
  }
}

