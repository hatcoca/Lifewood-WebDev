import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message } = body

    // Validation
    const errors: Record<string, string> = {}
    if (!name || name.trim().length < 2) errors.name = "Full name is required (at least 2 characters)."
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "A valid email address is required."
    if (!subject || subject.trim().length < 3) errors.subject = "Subject is required (at least 3 characters)."
    if (!message || message.trim().length < 10) errors.message = "Message must be at least 10 characters."

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 })
    }

    // In production, you would save to a database or send an email here.
    // For now, we log the submission and return success.
    console.log("Contact form submission:", {
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || "N/A",
      subject: subject.trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! We will get back to you within 1-2 business days.",
    })
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    )
  }
}
