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
        <h1 className='bg-primary text-center text-dark p-3 mb-3'>Blogs Page</h1>
 
      <div className="container ">
        <div className="row">
        {blogs.slice(start, end).map((val) => (
          <div className="col-md-4 mb-4" key={val.id}>
            <div className="card h-100 shadow-sm">

              {/* Image */}
              <div className="d-flex justify-content-center p-3">
                <img
                  src={val.image ? `${BASE_URL}${val.image}` : ""}
                  alt={val.title}
                  className="img-fluid rounded"
                  style={{
                    height: "180px",
                    width: "180px",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Body */}
              <div className="card-body text-center d-flex flex-column">
                <small className="text-muted mb-2">
                  {val.publish_date}
                </small>

                <h5 className="card-title fw-bold">
                  {val.title}
                </h5>

                <p className="card-text text-secondary">
                  {val.product_category_name}
                </p>

                {/* Push button to bottom */}
                <div className="mt-auto">
                  <button className="btn btn-primary w-100">
                    Read More
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
      </div>
      <div className='text-center mx-4'>
        {
          [...Array(noofPages).keys()].map((n)=>(
<button className='btn btn-outline-primary mx-4' onClick={()=>handlePage(n)}>{n}</button>
          ))
        }
      </div>
      
    </div>
  )
}

export default App
