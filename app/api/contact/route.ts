import { NextResponse } from "next/server";
import { getFirestore } from "@/lib/firebaseAdmin";
import { sendContactNotification } from "@/lib/email-service";

export async function GET() {
  try {
    const db = getFirestore();
    const snapshot = await db.collection("contacts").orderBy("submittedAt", "desc").get();
    const messages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(messages);
  } catch (error) {
    console.error("Fetch Contact Messages Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Validation
    const errors: Record<string, string> = {};
    if (!name || name.trim().length < 2) errors.name = "Full name is required (at least 2 characters).";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "A valid email address is required.";
    if (!subject || subject.trim().length < 3) errors.subject = "Subject is required (at least 3 characters).";
    if (!message || message.trim().length < 10) errors.message = "Message must be at least 10 characters.";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const submission = {
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || "N/A",
      subject: subject.trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
      status: 'unread'
    };

    // Save to Firestore
    const db = getFirestore();
    await db.collection("contacts").add(submission);

    // Send Email Notification
    try {
      await sendContactNotification(submission);
    } catch (emailError) {
      console.error("Failed to send contact email notification:", emailError);
      // We don't fail the whole request if email fails
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! We will get back to you within 1-2 business days.",
    });
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message?.includes("FIREBASE")
          ? error.message
          : "Something went wrong. Please try again later."
      },
      { status: 500 }
    );
  }
}
