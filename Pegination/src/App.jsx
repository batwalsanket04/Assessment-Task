import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  const [blogs,Setblogs]=useState([])
  const [currentPage,Setcurrentpage]=useState(0)
 
  const PAGE_SIZE=6;

  const BASE_URL="https://mcpbe.mangochairs.com"

  const fetchdata=async()=>{
try {

  const res=await axios.get("https://mcpbe.mangochairs.com/frontend/blogs/?page=1&page_size=12")
  console.log(res.data)
  Setblogs(res.data.blogs)
  
} catch (error) {
  console.log(error)
}
  }

  useEffect(()=>{
    fetchdata();
  },[])


  const totalProduct= blogs.length;
  const noofPages=Math.ceil(totalProduct/PAGE_SIZE)


  const start=currentPage * PAGE_SIZE;
  const end=start+PAGE_SIZE

const handlePage=(n)=>{
  Setcurrentpage(n)
}



  return (
    <div>
  
      
    </div>
  )
}

export default App
