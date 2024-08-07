import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Sidebar = () => {
  const[popularBlogs,setPopularBlogs]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/blogs').then(res=>res.json()).then(data=>setPopularBlogs(data.slice(0,15)));
  },[])


  return (
    <div>


        <div>
            <h3 className='text-2xl font-semibold px-4'>Latest Page</h3>

            <div>
                {
                popularBlogs.slice(0,5).map((bLogs)=><div key={bLogs.id} className='my-5 border-b-2'>
                   <h4 className='font-medium mb-2'>{bLogs.title}</h4>
                   <Link to='/' className='text-base pd-2 hover:text-orange-500 inline-flex'> Learn more
      <FaArrowRight className='mt-1 ml-2'/> 
      </Link>
     </div>)
 }</div>
</div>

     <div >
            <h3 className='text-2xl font-semibold px-4 mt-20'>Latest Page</h3>

            <div>
                {
                popularBlogs.slice(6,10).map((bLogs)=><div key={bLogs.id} className='my-5 border-b-2'>
                   <h4 className='font-medium mb-2'>{bLogs.title}</h4>
                   <Link to='/' className='text-base pd-2 hover:text-orange-500 inline-flex'> Learn more
      <FaArrowRight className='mt-1 ml-2'/> 
      </Link>
     </div>)
 }</div>
</div>






    </div>
  )
}

export default Sidebar