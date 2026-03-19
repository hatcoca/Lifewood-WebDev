import { NextResponse } from "next/server";

export async function GET() {
    // This endpoint helps us see WHICH keys are visible to the server
    // We do NOT print the actual secret values for security!

    const keys = [
        "FIREBASE_PROJECT_ID",
        "FIREBASE_CLIENT_EMAIL",
        "FIREBASE_PRIVATE_KEY",
        "FIREBASE_SERVICE_ACCOUNT_KEY",
        "FIREBASE_STORAGE_BUCKET",
        "EMAIL_USER",
        "EMAIL_PASS",
        "ADMIN_EMAIL"
    ];

    const status = keys.reduce((acc, key) => {
        const value = process.env[key];
        let privateKeyFrag = "N/A";

        if (key === "FIREBASE_SERVICE_ACCOUNT_KEY" && value) {
            try {
                const parsed = JSON.parse(value);
                if (parsed.private_key) {
                    privateKeyFrag = `${parsed.private_key.substring(0, 30)}...${parsed.private_key.substring(parsed.private_key.length - 30)}`;
                }
            } catch (e) { }
        }

        acc[key] = {
            exists: !!value,
            length: value ? value.length : 0,
            startsWith: value ? value.substring(0, 15) + "..." : "N/A",
            endsWith: value ? "..." + value.substring(value.length - 15) : "N/A",
            jsonPrivateKeyFrag: privateKeyFrag,
            hasNewlines: value ? value.includes("\n") : false,
            hasEscapedNewlines: value ? value.includes("\\n") : false,
        };
        return acc;
    }, {} as Record<string, any>);

    return NextResponse.json({
        message: "Firebase Diagnostic Endpoint",
        env: process.env.NODE_ENV,
        timestamp: new Date().toISOString(),
        variables: status
    });
}
