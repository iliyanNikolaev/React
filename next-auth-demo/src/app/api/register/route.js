import connectToDB from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import User from "@/models/User";

export async function POST(req) {
    try {
        const { username, password } = await req.json();

        const hashedPassword = await bcrypt.hash(password, 5);

        await connectToDB();
        await User.create({ username, password: hashedPassword });
        return NextResponse.json({ message: 'User registered.'}, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: 'Error occured while registering the user.'}, { status: 500 });
    }
}