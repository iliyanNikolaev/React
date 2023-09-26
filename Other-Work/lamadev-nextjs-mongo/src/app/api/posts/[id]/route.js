import { NextResponse } from "next/server";
import connectToDB from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
    const { id } = params;
    try {
        await connectToDB();

        const post = await Post.findById(id);

        return NextResponse.json(post, { status: 200 });
    } catch (err) {
        return NextResponse.json('Database Error', { status: 400 });
    }
}