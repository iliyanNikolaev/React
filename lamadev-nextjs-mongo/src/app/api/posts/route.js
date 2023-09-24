import { NextResponse } from "next/server";
import connectToDB from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
    try {
        await connectToDB();

        const posts = await Post.find();

        return new NextResponse(posts, { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }

}