import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Categories from '../components/Categories'
import Popularproducts from '../components/Popularproducts'
import Blog from '../components/Blog'
import banner from '../assets/banner.png'

const Home = () => {
  return (
    <div >
      <Hero/>
      <Features/>
      <Categories/>
      <Popularproducts/>
      <div className='max-w-7xl mx-auto px-4 overflow-auto'>
        <img src={banner} alt='BannerImg' className='w-full max-h-[500px] object-cover rounded-lg'/>
      </div>
      <Blog/>
    </div>
  )
}

export default Home
