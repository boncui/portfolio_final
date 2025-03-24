// components/custom/submitContactForm.ts (not ContractForm!)
"use server"

export async function submitContactForm(
  _prevState: { message: string },
  formData: FormData
): Promise<{ message: string }> {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  console.log("Contact form submission:", { name, email, message })

  return { message: "Thanks! I’ll get back to you soon." }
}
