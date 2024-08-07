import React from 'react';
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-gray-900'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
        <div className='grid grid-cols-2 gap-5 md:grid-cols-5'>
          <div>
            <p className='font-medium tracking-wide text-gray-300'>Category</p>
            <ul className='mt-2 space-y-2'>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
              </li>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
              </li>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
              </li>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>References</a>
              </li>
            </ul>
          </div>
          <div>
            <p className='font-medium tracking-wide text-gray-300'>Apples</p>
            <ul className='mt-2 space-y-2'>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
              </li>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
              </li>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
              </li>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>References</a>
              </li>
            </ul>
          </div>
          <div>
            <p className='font-medium tracking-wide text-gray-300'>Cherry</p>
            <ul className='mt-2 space-y-2'>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
              </li>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
              </li>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
              </li>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>References</a>
              </li>
            </ul>
          </div>
          <div>
            <p className='font-medium tracking-wide text-gray-300'>Business</p>
            <ul className='mt-2 space-y-2'>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
              </li>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
              </li>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
              </li>
              <li>
                <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>References</a>
              </li>
            </ul>
          </div>


          <div>
            <p className='font-medium tracking-wide text-gray-300'>Technology</p>
            <form className=' mt-4  flex  flex-col md:flex-row'>
           <input type='email' name="email" id="email" 
           className='flex-grow  w-full h-12 px-4 mb-3 transition duration-200 bg-white border  border-gray-300 
            rounded shadow-sm  aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />

            <button type='submit' className='inline-flex  items-center justify-center h-12 px-6
             font-medium tracking-wide text-white  transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border '>

            Subscribe</button>
            </form>
            <p className='mt-4 text-sm text-gray-500'>
              Lorem ipsum, dolor sit amet consectetur adipisicing
               elit. Illum ipsam et necessitatibus, impedit ullam esse aliquam rem
              modi nisi dolor perspiciatis autem odio tempore explicabo excepturi cumque, 
                cupiditate eos perferendis. Alias obcaecati ducimus tempora! Quisquam quae vero reiciendis dolor quidem!

            </p>
          </div>
        </div>

        <div className='flex flex-col justify-center pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
          <p  className='text-sm text-gray-500'>Copyright 2023|All right reservex</p>

        <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
          <a href="" className='text-gray-500 transition-all duration-300' ><FaTwitter className='h-6 w--6'/></a>
          <a href="" className='text-gray-500 transition-all duration-300' ><FaTwitter className='h-6 w--6'/></a>
          <a href="" className='text-gray-500 transition-all duration-300' ><FaTwitter className='h-6 w--6'/></a>

        </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;
