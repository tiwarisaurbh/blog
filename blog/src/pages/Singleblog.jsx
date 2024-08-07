import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaUser, FaClock } from 'react-icons/fa';
import Sidebar from '../component/Sidebar';

const SingleBlog = () => {
  const data = useLoaderData();
  const { title, image, category, author, published_date, reading_time, content } = data[0];

  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
      </div>

      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt={title} className='w-full mx-auto rounded' />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">{title}</h2>
          <p className='mb-3 text-gray-600'>
            <FaUser className='inline-flex items-center mr-2' />
            {author} | {published_date}
          </p>
          <p className='mb-3 text-gray-600'>
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <p className='text-base text-gray-500 mb-6'>{content}</p>

          {/* Additional blog content */}
          <div className='text-base text-gray-500 space-y-4'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, explicabo quo
              nihil in voluptate fugiat sapiente nemo recusandae hic itaque! Nulla dolorum nesciunt,
              possimus laboriosam porro nobis placeat quo blanditiis similique beatae ducimus alias vel,
              sint necessitatibus modi ipsa in vero mollitia incidunt enim quos magni? Fugiat a culpa laboriosam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, explicabo quo
              nihil in voluptate fugiat sapiente nemo recusandae hic itaque! Nulla dolorum nesciunt,
              possimus laboriosam porro nobis placeat quo blanditiis similique beatae ducimus alias vel,
              sint necessitatibus modi ipsa in vero mollitia incidunt enim quos magni? Fugiat a culpa laboriosam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, explicabo quo
              nihil in voluptate fugiat sapiente nemo recusandae hic itaque! Nulla dolorum nesciunt,
              possimus laboriosam porro nobis placeat quo blanditiis similique beatae ducimus alias vel,
              sint necessitatibus modi ipsa in vero mollitia incidunt enim quos magni? Fugiat a culpa laboriosam.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
