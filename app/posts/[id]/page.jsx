








"use client"
async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`,{cache:"no-store"})
    
    
  
    
  
    return res.json();
  }



 


const GetDetails = async({params}) => {
    const data=await getData(params.id)
    console.log(data)
    const {id}=params
    


 
    
  return (
    <div>
        <p>{data.title} </p>
        <p>{data.desc} </p>
       
     </div>
  )
}

export default GetDetails

  
 

