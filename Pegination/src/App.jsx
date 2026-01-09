 import React, { useEffect, useState } from 'react'
 import axios from 'axios'
 
 const App = () => {

  const [blogs,setblogs]=useState([])
  const [currentPage,setcurrentpage]=useState(0)
  const [selectedCategory,SetselectedCategory]=useState("All")

  const page_size=4

  const BASE_URL="https://mcpbe.mangochairs.com"

  const fetchData=async()=>{
    try {
      const res=await axios.get("https://mcpbe.mangochairs.com/frontend/blogs/?page=1&page_size=12");
      console.log(res)
      setblogs(res.data.blogs)

    } catch (error) {
       console.log(error)
    }
  }
 
   useEffect(()=>{
  fetchData();
   },[])


   const start=currentPage* page_size
   const end=start + page_size


   const totolPtoduct=blogs.length;

   const noofpages= Math.ceil(totolPtoduct/page_size)

   const HandlePage=(n)=>{
    setcurrentpage(n)
   }

  
   
   
   return (
     <div>
  

      <div className="container">
        <div className="row">
          {
            blogs.slice(start,end).map((val,index)=>(
              <div className="col-md-4">
                <div className="card my-2" >
                  <img src={val.image ? `${BASE_URL}${val.image}`:""}  className="m-auto" alt="" style={{height:"200px", width:"200px"}} />
                  <div className="card-body">
                    <h5>{val.title}</h5>
                    <h4 className='text-secondary'>{val.product_category_name}</h4>
                    <p>{val.publish_date}</p>
                    <div className="card-footer">
                      <button className='btn btn-primary'>Click</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

   <div className='text-center '>
    {
      [...Array(noofpages).keys()].map((n)=>(

        <button className='btn btn-outline-primary mx-2' onClick={()=>HandlePage(n)}>{n}</button>
      ))
    }
     
   </div>
       
     </div>
   )
 }
 
 export default App
 