import { connectToDB } from "@utils/connectDb";
import Post from "@models/post";
import { NextResponse } from "next/server";

export async function GET(request){
    try {
        await connectToDB()
        const posts=await Post.find({})
        return new NextResponse(JSON.stringify(posts),{status:200})

        
    } catch (error) {
        return new NextResponse("no post funded",{status:404})

        
    }
}