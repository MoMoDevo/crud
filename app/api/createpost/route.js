import Post from "@/models/post";
import { connectToDB } from "@/utils/connectDb";
import { NextResponse } from "next/server";


export async function POST(request){

    const {title,desc}=await request.json()
try {
    await connectToDB()
    



    const newPost=await new  Post({
        title,
        desc
    })
    const post=await newPost.save()
    return new NextResponse(JSON.stringify(post),{status:201})

} catch (error) {
    return new NextResponse("failed to create a post",{status:401})


    
}
}