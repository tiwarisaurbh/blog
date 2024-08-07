import React from 'react';
import { Link } from 'react-router-dom';
import  {FaUser} from  'react-icons/fa' 


const BlogCard = ({ bLogs,currentPage,slectedCategory , pageSize}) => {
  const filteredBlogs = bLogs.filter((bLogs)=>!slectedCategory||bLogs.category===slectedCategory)
  .slice((currentPage-1)*pageSize,currentPage*pageSize)
  ;
  console.log(filteredBlogs);

  return (
    <div className='grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1  gap-8'>
      {
        filteredBlogs.map((bLog) => (
          <Link to={`/blogs/${bLog.id}`} key={bLog.id} className='p-5 shadow-lg rounded  cursor-pointer'>
            <div>
              <img src={bLog.image} alt='' className='w-full' />
            </div>
           <h3 className='mt-4 mb-2 font-bold hover:  text-blue-600 cursor-pointer'>{bLog.title}</h3>
           <p className='mb-2 text-sm text-gray-700 '><FaUser className='inline-flex items-center mr-2'/>{bLog.author}</p>
           <p className='text-sm text-gray-500 '>Published:{bLog.published_date}</p>
          </Link>
        ))
      }
    </div>
  );
};

export default BlogCard;
