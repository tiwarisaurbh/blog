import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
 import BlogCard from './BlogCard'
import Pagination from './Pagination'
import CategorSelection from './CategorSelection'
import Sidebar from './Sidebar'


const BlogPage = () => {
  const[blogs ,setBlogs ]=useState([]);
  const[currentPage ,setcurrentPage]=useState(1);
  const pageSize=12;
  const[slectedCategory,setSelectedCategory]=useState(null);
  const[activeCategory,setActiveCategory]=useState(null);







      useEffect(()=>{
          async function fetchBlogs(){
          let url=`http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;



          if(slectedCategory){
            url+=`category=${setSelectedCategory}`
          }

            const response=await fetch(url)
            const data=await response.json();
           //      console.log(data)
            setBlogs(data);
          }
          fetchBlogs();
  
      },[currentPage,pageSize,slectedCategory])
  

      const handlePageChange=(pageNumber)=>{
        setcurrentPage(pageNumber)
      }
      const handleCategoryChange=(category)=>{
        setSelectedCategory(category)
        setcurrentPage(1)
      setActiveCategory(category)
      }
  
  return (
    <div>
         {/* {category section} */}
        <div><CategorSelection  onSelectCategory={handleCategoryChange} slectedCategory={slectedCategory}
         activeCategory={activeCategory}
        /></div>
          
           {/* blogCards section */}
          <div className='flex flex-col lg:flex-row gap-12'>
             <BlogCard bLogs={blogs} currentPage={currentPage} slectedCategory={slectedCategory} pageSize={pageSize}/>

             <div>
              <Sidebar/>
             </div>
          </div>

           {/* pagination section */}

          <div>

            <Pagination onPageChange={handlePageChange} currentPage={currentPage} bLogs={blogs} pageSize={pageSize}/>
          </div>




     </div>

  )
}

export default BlogPage