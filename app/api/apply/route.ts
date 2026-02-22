import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const fullName = formData.get("fullName") as string | null
    const email = formData.get("email") as string | null
    const phone = formData.get("phone") as string | null
    const position = formData.get("position") as string | null
    const experience = formData.get("experience") as string | null
    const coverLetter = formData.get("coverLetter") as string | null
    const resume = formData.get("resume") as File | null

    // Validation
    const errors: Record<string, string> = {}
    if (!fullName || fullName.trim().length < 2) errors.fullName = "Full name is required (at least 2 characters)."
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "A valid email address is required."
    if (!phone || phone.trim().length < 7) errors.phone = "A valid phone number is required."
    if (!position || position.trim().length < 2) errors.position = "Please select or enter a position."
    if (!experience) errors.experience = "Please select your experience level."

    if (resume) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]
      if (!allowedTypes.includes(resume.type)) {
        errors.resume = "Resume must be a PDF or Word document."
      }
      if (resume.size > 5 * 1024 * 1024) {
        errors.resume = "Resume file size must be under 5MB."
      }
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 })
    }

    // In production, you would save to a database and store the file.
    // For now, we log the submission and return success.
    console.log("Apply Now form submission:", {
      fullName: fullName?.trim(),
      email: email?.trim(),
      phone: phone?.trim(),
      position: position?.trim(),
      experience,
      coverLetter: coverLetter?.trim() || "N/A",
      resumeFileName: resume?.name || "No file uploaded",
      resumeSize: resume ? `${(resume.size / 1024).toFixed(1)}KB` : "N/A",
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Your application has been submitted successfully! Our hiring team will review it and reach out to you soon.",
    })
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    )
  }
}
