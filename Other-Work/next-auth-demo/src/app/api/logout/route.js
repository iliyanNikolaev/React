import { checkForInvalidToken } from "@/utils/jwt";
import connectToDB from "@/utils/db";
import InvalidToken from "@/models/InvalidToken";
import { NextResponse } from "next/server";

export async function GET(req) {
    const token = req.headers.get('x-authorization');

    try {
        const isTokenExistInBase = await checkForInvalidToken(token);

        if (!isTokenExistInBase) {
            await connectToDB();

            await InvalidToken.create({
                token,
                createdAt: new Date()
            });
        }
        
        return NextResponse.json({ message: 'You successfully logout.' }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}