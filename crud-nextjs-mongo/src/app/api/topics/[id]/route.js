import connectToDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { id } = params;

    try {
        await connectToDB();
        const topic = await Topic.findById(id);
        await mongoose.disconnect();
        return NextResponse.json(topic, {status: 200});
    } catch (err) {
        return NextResponse.json({error: err.message}, {status: 400});
    }
}

export async function PUT(req, { params }) {
    const { id } = params;
    
    try {
        const { title, text } = await req.json();
        await connectToDB();
        await Topic.findByIdAndUpdate(id, { title, text });
        await mongoose.disconnect();
        return NextResponse.json({ title, text }, { status: 200 });
    } catch (err) {
        return NextResponse.json({error: err.message}, {status: 400});
    }
}