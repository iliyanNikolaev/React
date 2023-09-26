import connectToDB from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import User from "@/models/User";
import Jwt from "jsonwebtoken";

export async function POST(req) {
    try {
        const { username, password } = await req.json();
        
        const isExist = await User.findOne({ username: username.trim() });

        if (isExist) {
            throw new Error('User already exist.');
        }

        const hashedPassword = await bcrypt.hash(password, 5);

        await connectToDB();
        const user = await User.create({ username, password: hashedPassword });

        const response = {
            _id: user.id,
            username: user.username,
            accessToken: createToken(user)
        }

        return NextResponse.json(response, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}

function createToken(user) {
    const payload = {
        username: user.username,
        _id: user._id,
    }

    return Jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '12h' });
}