import { NextResponse } from "next/server";
import { db, bucket } from "@/lib/firebaseAdmin";
import { sendApplicationNotification } from "@/lib/email-service";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
    try {
        const snapshot = await db.collection("applications").orderBy("submittedAt", "desc").get();
        const applications = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return NextResponse.json(applications);
    } catch (error) {
        console.error("Fetch Applications Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch applications" },
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

        await db.collection("applications").doc(id).update({ status });

        return NextResponse.json({
            success: true,
            message: `Status updated to ${status}`,
        });
    } catch (error) {
        console.error("Update Application Status Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to update status" },
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
        const resume = formData.get("resume") as File;

        if (!name || !email || !phone || !position || !resume) {
            return NextResponse.json(
                { success: false, error: "Required fields missing" },
                { status: 400 }
            );
        }

        let resumeURL = "";
        const fileName = `${Date.now()}_${uuidv4()}_${resume.name}`;
        const file = bucket.file(`resumes/${fileName}`);
        const buffer = Buffer.from(await resume.arrayBuffer());

        await file.save(buffer, {
            metadata: { contentType: resume.type },
            public: true,
        });

        resumeURL = `https://storage.googleapis.com/${bucket.name}/${file.name}`;

        const applicationData = {
            name,
            email,
            phone,
            position,
            portfolio: portfolio || "",
            message: message || "",
            resumeURL,
            status: "pending",
            submittedAt: new Date().toISOString(),
            createdAt: new Date().toISOString(),
        };

        await db.collection("applications").add(applicationData);

        try {
            await sendApplicationNotification({
                fullName: name,
                email,
                phone,
                position,
                experience: "N/A",
                coverLetter: message,
                resumeUrl: resumeURL,
            });
        } catch (err) {
            console.error("Email notification failed:", err);
        }

        return NextResponse.json({
            success: true,
            message: "Application submitted successfully",
            resumeURL,
        });
    } catch (error) {
        console.error("Application POST error:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
