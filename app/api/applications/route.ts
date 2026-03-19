import { NextResponse } from "next/server";
import { getFirestore } from "@/lib/firebaseAdmin";
import { sendApplicationNotification } from "@/lib/email-service";

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
        await db.collection("applications").doc(id).update({ status });

        return NextResponse.json({
            success: true,
            message: `Status updated to ${status}`,
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
        // Option B: JSON instead of FormData to bypass Storage
        const body = await request.json();
        const { name, email, phone, position, portfolio, message, resumeURL } = body;

        if (!name || !email || !phone || !position || !resumeURL) {
            return NextResponse.json(
                { success: false, error: "Required fields missing (Name, Email, Phone, Position, and Resume Link are all required)." },
                { status: 400 }
            );
        }

        const applicationData = {
            name,
            email,
            phone,
            position,
            portfolio: portfolio || "",
            message: message || "",
            resumeURL, // This is now a direct link provided by the user
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
                experience: "Mentioned in Message",
                coverLetter: message,
                resumeUrl: resumeURL,
            });
        } catch (err) {
            console.error("Email notification failed:", err);
        }

        return NextResponse.json({
            success: true,
            message: "Application submitted successfully! Our team will review your resume link and get back to you.",
            resumeURL,
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
