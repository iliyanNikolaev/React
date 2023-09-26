import User from "@/models/User";
import connectToDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { username } = await req.json();

    try {
        await connectToDB();

        const user = await User.findOne({ username });

        return NextResponse.json(user, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: 'Error occured while finding the user.'}, { status: 500 });
    }
}