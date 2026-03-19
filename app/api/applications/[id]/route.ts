import { NextResponse } from "next/server";
import { db, bucket } from "@/lib/firebaseAdmin";

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;

        if (!id) {
            return NextResponse.json(
                { success: false, message: "Application ID is required" },
                { status: 400 }
            );
        }

        const docRef = db.collection("applications").doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            return NextResponse.json(
                { success: false, message: "Application not found" },
                { status: 404 }
            );
        }

        const appData = doc.data();

        // Delete from Firestore
        await docRef.delete();

        // Delete resume from Firebase Storage if it exists
        if (appData?.resumeUrl && appData.resumeUrl.includes("storage.googleapis.com")) {
            try {
                // Extract filename from URL
                const fileName = appData.resumeUrl.split("/").pop();
                if (fileName) {
                    await bucket.file(`resumes/${fileName}`).delete();
                }
            } catch (storageError) {
                console.error("Failed to delete resume from storage:", storageError);
            }
        }

        return NextResponse.json({
            success: true,
            message: "Application deleted successfully",
        });
    } catch (error) {
        console.error("Delete Application Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to delete application" },
            { status: 500 }
        );
    }
}
