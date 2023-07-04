"use client"

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const EditForm = ({title,desc,id}) => {
    const router=useRouter()
    const [changetitle,setTitle]=useState(title)
   const  [changeDesc,setDesc]=useState(desc)

 
            // const res=await axios.put(`/api/posts/${id}`,{changeDesc,changetitle})
            //  alert("post uppdated!")
            const handleSubmit = async (e) => {
                e.preventDefault();
            
                try {
                  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
                    method: "PUT",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify({ changeDesc, changetitle }),
                  });
            
                  if (!res.ok) {
                    throw new Error("Failed to update topic");
                  }
            
                  router.refresh();
                  router.push("/");
                } catch (error) {
                  console.log(error);
                }
              };
            

          
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='title' value={changetitle} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" placeholder='desc' value={changeDesc} onChange={(e)=>setDesc(e.target.value) } />
            <button type='submit'>edit</button>



        </form>
    </div>
  )
}

export default EditForm