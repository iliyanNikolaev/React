import connectToDB from "@/utils/db";
import User from "@/models/User";
import bcrypt from 'bcryptjs';
import { createToken } from "@/utils/jwt";
import { NextResponse } from "next/server";


export async function POST(req) {
    const { username, password } = await req.json();
    try {
        await connectToDB();

        const user = await User.findOne({ username });

        if (!user) {
            throw new Error('Wrong username or password.');
        }

        const comparing = await bcrypt.compare(password, user.password);

        if (!comparing) {
            throw new Error('Wrong username or password.');
        }

        const response = {
            _id: user.id,
            username: user.username,
            accessToken: createToken(user)
        }

        return NextResponse.json(response, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}