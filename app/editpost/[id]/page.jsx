import EditForm from "@components/EditForm";

 
 async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`,{cache:"no-store"})
    
    
  
    
  
    return res.json();
  }



 
 
 

 
export default async function EditOne ({params}) {
    const {id}=params 
    const post=await getData(id)
    console.log(post)
    const {title,desc}=post

  
    
  return (
    <div>
        <p>edit now</p>
        <EditForm title={title}  desc={desc}   id={id}  />
         </div>
  )
}

 