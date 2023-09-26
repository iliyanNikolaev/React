import { NextResponse } from "next/server";

export async function GET(req) {
    const token = req.headers.get('x-authorization');

    console.log(token);

    return NextResponse.json({ accessToken: token });
}