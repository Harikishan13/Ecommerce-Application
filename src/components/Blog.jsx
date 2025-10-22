import React from 'react';
import { blogs } from '../assets/Data';

const Blog = () => {

  return (
      <section className='px-3 py-15 bg-gradient-to-r from-gray-200 to-gray-200 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 overflow-hidden'>
          <h1 className='text-3xl font-bold mb-2'>Our Expert <span className='text-gray-500 underline'>Blog</span></h1>
          <p className='text-black/50 text-sm'>
            Stay ahead of fashion trends with styling tips, product reviews, and<br/> expert advice helping you shop smarter and dress better.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-6 h-fit'>
            {blogs.map((blog) => ( 
              <div key={blog.title} className='relative border-[11px] border-white overflow-hidden'>
                <img src={blog.image} alt={blog.title} className='w-full h-auto'/>
              <div className='absolute top-0 left-0 h-full w-full bg-black/30 flex items-end'>
                <div className=' text-white text-[15px] py-4 px-3'>
                  <h3 className='font-semibold  text-[16px] leading-5 pr-4'>{blog.title}</h3>
                  <h4 className='py-1 text-gray'>{blog.category}</h4>
                  <button className='bg-white/30 py-1 px-2 mt-1 font-semibold'>Continue reading</button>
                </div>
              </div>
              </div> 
            ))}
          </div>
        </div>
      </section>
  )
}

export default Blog
