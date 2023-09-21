import connectToDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { id } = params;

    try {
        await connectToDB();
        const topic = await Topic.findById(id);
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
        await Topic.findByIdAndUpdate(id, { title: title.trim(), text: text.trim() });
        return NextResponse.json({ title: title.trim(), text: text.trim() }, { status: 200 });
    } catch (err) {
        return NextResponse.json({error: err.message}, {status: 400});
    }
}