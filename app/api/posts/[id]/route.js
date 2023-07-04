import { connectToDB } from "@utils/connectDb";
import Post from "@models/post";
import { NextResponse } from "next/server";







export async function GET(request,{params}){
    
    
    try {
        const {id}=params
 await connectToDB()
        
  
   
   
    const post=await Post.findById(id)
    return new NextResponse(JSON.stringify(post),{status:200})
} catch (error) {
    return new NextResponse("Not Found!",{status:404})

        
    
}
}
export async function DELETE(request,{params}){
    
    
    try {
        const {id}=params
 await connectToDB()
        
  
   
   
    const post=await Post.findByIdAndDelete(id)
    return new NextResponse("post deleted!",{status:200})
} catch (error) {
    return new NextResponse("Not Found!",{status:404})

        
}








}
export async function PUT(request, { params }) {
    const { id } = params;
    const { changetitle: title, changeDesc: desc } = await request.json();
    await connectToDB();
    await Post.findByIdAndUpdate(id, { title, desc });
    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
  }