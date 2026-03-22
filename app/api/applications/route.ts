import { NextResponse } from "next/server";
import { getFirestore } from "@/lib/firebaseAdmin";
import { sendApplicationNotification, sendApplicationStatusUpdate } from "@/lib/email-service";

export async function GET() {
    try {
        const db = getFirestore();
        const snapshot = await db.collection("applications").orderBy("submittedAt", "desc").get();
        const applications = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return NextResponse.json(applications);
    } catch (error: any) {
        console.error("Fetch Applications Error:", error);
        return NextResponse.json(
            { success: false, message: error.message || "Failed to fetch applications" },
            { status: 500 }
        );
    }
}

export async function PATCH(request: Request) {
    try {
        const body = await request.json();
        const { id, status } = body;

        if (!id || !status) {
            return NextResponse.json(
                { success: false, message: "Application ID and status are required" },
                { status: 400 }
            );
        }

        const db = getFirestore();
        const appDoc = await db.collection("applications").doc(id).get();

        if (!appDoc.exists) {
            return NextResponse.json(
                { success: false, message: "Application not found" },
                { status: 404 }
            );
        }

        const appData = appDoc.data();
        await db.collection("applications").doc(id).update({ status });

        // Trigger email notification if status is accepted or rejected
        if (status === "accepted" || status === "rejected") {
            try {
                await sendApplicationStatusUpdate({
                    fullName: appData?.name || "Candidate",
                    email: appData?.email,
                    position: appData?.position || "the requested position",
                    status: status as "accepted" | "rejected"
                });
            } catch (emailErr) {
                console.error("Failed to send status update email:", emailErr);
                // We don't return error here because the DB update was successful
            }
        }

        return NextResponse.json({
            success: true,
            message: `Status updated to ${status} and notification sent.`,
        });
    } catch (error: any) {
        console.error("Update Application Status Error:", error);
        return NextResponse.json(
            { success: false, message: error.message || "Failed to update status" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const position = formData.get("position") as string;
        const portfolio = formData.get("portfolio") as string;
        const message = formData.get("message") as string;
        const resumeFile = formData.get("resume") as File | null;

        if (!name || !email || !phone || !position || !resumeFile) {
            return NextResponse.json(
                { success: false, error: "Required fields missing (Name, Email, Phone, Position, and Resume File are all required)." },
                { status: 400 }
            );
        }

        // Convert file to Buffer for email attachment
        const bytes = await resumeFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const applicationData = {
            name,
            email,
            phone,
            position,
            portfolio: portfolio || "",
            message: message || "",
            resumeURL: "", // We are not uploading to storage anymore
            status: "pending",
            submittedAt: new Date().toISOString(),
            createdAt: new Date().toISOString(),
        };

        const db = getFirestore();
        await db.collection("applications").add(applicationData);

        try {
            await sendApplicationNotification({
                fullName: name,
                email,
                phone,
                position,
                experience: "Provided in Application",
                coverLetter: message,
                resumeFile: {
                    buffer,
                    filename: resumeFile.name,
                    contentType: resumeFile.type
                }
            });
        } catch (err) {
            console.error("Email notification failed:", err);
        }

        return NextResponse.json({
            success: true,
            message: "Application submitted successfully! Your resume has been sent to our team as an attachment.",
        });
    } catch (error: any) {
        console.error("Application POST error:", error);
        return NextResponse.json(
            {
                success: false,
                error: error.message || "Something went wrong during submission.",
            },
            { status: 500 }
        );
    }
}
