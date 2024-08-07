import React from 'react'
import BlogPage from '../component/BlogPage.'

const Blog = () => {
  return (
    <div>
      <div  className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>This is Blog Page</h2>
      </div>

      <div className='max-w-7xl mx-auto'>
      <BlogPage/>
      </div>
    </div>
  )
}

export default Blog

