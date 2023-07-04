"use client"

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import  {useRouter} from "next/navigation"


const Posts = () => {
  const router=useRouter()

    const [getPosts,setPosts]=useState([])
    const [loading,setLoading]=useState([])

    useEffect(()=>{
 
        const fetchPosts=async()=>{

            const res=await axios.get("/api/posts")
             setPosts(res.data)

        }
        fetchPosts()



    },[])
     
    const handleDelete = async (id) => {
      const confirmed=confirm("are u sure?")
      try {
        if(confirmed){
          await fetch(`/api/posts/${id}`, {
            method: "DELETE",
          });

        }
        router.refresh()

       

         
      } catch (err) {
        console.log(err);
      }
    };


  return (
    <div className="flex gap-3  w-4/6 m-auto mt-7  ">
      {getPosts.map((post)=>(
        <div className="flex w-1/12 h-30 items-center justify-center shadow-lg gap-6 flex-col" key={post._id}    >

        <Link href={`/posts/${post._id}`}> <p> {post.title} </p></Link>  
        <Link href={`/editpost/${post._id}`}> <p> {post.desc} </p></Link>  
          
          <button onClick={()=>handleDelete(post._id)}>delete</button>
         

        </div>
      ))}

    </div>
  )
}

export default Posts