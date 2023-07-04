import CaroselComponent from "@components/Carousel"
import { getTopics } from "@components/FetchAllposts"

const Home =async () => {
  const posts=await getTopics()
  console.log(posts)

  
  return (
    <div className='flex w-3/6 h-full  m-auto'>
     
      

     
    <p className="text-center text-lg">home here</p> 
    <CaroselComponent/>
        
    
       

 

    </div>
  )
}

export default Home