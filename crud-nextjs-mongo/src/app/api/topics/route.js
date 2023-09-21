import connectToDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDB();
        const topics = await Topic.find({});
        await mongoose.disconnect();
        return NextResponse.json(topics, {status: 200});   
    } catch (err) {
        return NextResponse.json({error: err.message}, {status: 400});
    }
}

export async function POST(req) {
    const {title, text} = await req.json();

    try {
        await connectToDB();
        const created = await Topic.create({title, text});
        await mongoose.disconnect();
        
        return NextResponse.json(created, {status: 200});   
    } catch (err) {
        return NextResponse.json({error: err.message}, {status: 400});
    }
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id');
    try {
        await connectToDB();
        await Topic.findByIdAndDelete(id);
        await mongoose.disconnect();

        return NextResponse.json({message: 'Deleted!'});
    } catch (err) {
        return NextResponse.json({error: err.message}, {status: 400});
    }
}