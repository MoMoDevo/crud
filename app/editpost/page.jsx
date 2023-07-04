"use client"

import { useState } from "react"

import { useRouter, useSearchParams } from "next/navigation";


 
const Edit = () => {
const searchParams=useSearchParams()
const router=useRouter()
const one=searchParams.get("id")
console.log(id)




    const [data,setData]=useState({
        title:"",
        desc:""
    })


    useEffect(() => {
        const getPromptDetails = async () => {
          const response = await fetch(`/api/posts/${one}`);
          const data = await response.json();
    
          setPost({
            title: data.title,
            desc: data.desc,
          });
        };
    
        if (one) getPromptDetails();
      }, [one]);


      const updatePrompt = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        if (!promptId) return alert("Missing PromptId!");
    
        try {
          const response = await fetch(`/api/prompt/${one}`, {
            method: "PATCH",
            body: JSON.stringify({
              prompt: post.prompt,
              tag: post.tag,
            }),
          });
    
          if (response.ok) {
            router.push("/");
          }
        } catch (error) {
          console.log(error);
        } finally {
          setIsSubmitting(false);
        }
      };






 
  return (
    <div>
        <form onSubmit={submitHandler}>

            <input type="text"  value={data.title}  onChange={()=>setData({...data,title:e.target.value})} placeholder="title"/>
            <input type="text" value={data.desc}  onChange={()=>setData({...data,desc:e.target.value})} placeholder="desc"/>
            <button type="submit">edit</button>
        </form>



    </div>
  )
}

export default Edit