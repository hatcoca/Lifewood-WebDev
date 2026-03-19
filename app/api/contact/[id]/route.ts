import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;

        if (!id) {
            return NextResponse.json(
                { success: false, message: "Message ID is required" },
                { status: 400 }
            );
        }

        await db.collection("contacts").doc(id).update({ status: "replied" });

        return NextResponse.json({
            success: true,
            message: "Message marked as replied",
        });
    } catch (error) {
        console.error("Update Contact Status Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to update status" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;

        if (!id) {
            return NextResponse.json(
                { success: false, message: "Message ID is required" },
                { status: 400 }
            );
        }

        await db.collection("contacts").doc(id).delete();

        return NextResponse.json({
            success: true,
            message: "Message deleted successfully",
        });
    } catch (error) {
        console.error("Delete Contact Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to delete message" },
            { status: 500 }
        );
    }
}
