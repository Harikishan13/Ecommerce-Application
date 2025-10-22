import React, { useContext, useEffect, useState } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { ShopContext } from '../context/ShopContext';


const Popularproducts = () => {

  const [popularProducts,setPopularProducts] = useState([])
  const {products,navigate,addToCart} =useContext(ShopContext)
  const [selectedSize,setSelectedSize] = useState("")

  useEffect(()=>{
    const data=products.filter((item) => item.popular)
    setPopularProducts(data.slice(0,6))
  },[products])


  return (
    <section className='px-3 py-10 bg-gradient-to-r from-gray-200 to-gray-200 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 overflow-hidden'>
          <h1 className='text-3xl font-bold mb-2'>Popular <span className='text-gray-500 underline'>Products</span></h1>
          <p className='text-black/50'>Explore our collection of stylish clothing and footwear made for <br/>
            comfort, quality, and everyday confidence</p>
      <Swiper autoplay={{
        delay:4000,
        disableOnInteraction:false,
      }}
      breakpoints={{
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
      }}
      modules={[Autoplay]}
      className='min-h-[399px]'>
        {popularProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <div className='h-[300px] px-3 py-4 mt-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col w-fit  '>
              <div onClick={() => {navigate(`collection/${product.category}/${product._id}`)}} 
              className='flex items-center justify-center bg-white overflow-hidden h-[180px] rounded'>
                <img src={product.image[0]} alt="ProductImg" className='object-contain  h-full w-auto transition-all duration-300'/>
              </div>
              <div className='flex-grow'>
                <h4 className='font-bold text-[15px] uppercase line-clamp-1 py-1'>{product.name}</h4>
                <p className='line line-clamp-1 text-black/50'>{product.description}</p>
                <div className='flex justify-between pt-2 gap-2 mt-auto'>
                  <p className='h-6 py-1 text-gray-600'>{product.category}</p>
                  <button onClick={() => addToCart(product.id,selectedSize) } className='border border-gray-300 px-1 py-1 text-xs rounded hover:bg-gray-100 transition'>
                    Add to Cart | ₹{product.offerPrice}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
  )
}

export default Popularproducts

