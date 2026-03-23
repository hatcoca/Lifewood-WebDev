import { NextResponse } from "next/server";
import { sendAdminEmail } from "@/lib/email-service";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { to, subject, message, name } = body;

        if (!to || !subject || !message) {
            return NextResponse.json(
                { success: false, message: "Recipient, subject, and message are required" },
                { status: 400 }
            );
        }

        await sendAdminEmail({ to, subject, message, name });

        return NextResponse.json({
            success: true,
            message: "Email sent successfully",
        });
    } catch (error) {
        console.error("Admin Email Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send email" },
            { status: 500 }
        );
    }
}
