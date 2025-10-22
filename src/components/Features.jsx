import React from 'react'
import { LiaShippingFastSolid } from 'react-icons/lia';
import { MdCurrencyExchange } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import { TbPackageImport } from 'react-icons/tb';

const Features = () => {
  return (
    <section className='w-full md:px-8 lg:px-16 mt-6 mb-6'>
      <div className='ml-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
        <div className='flex items-center gap-x-4'>
          <LiaShippingFastSolid className='text-4xl text-black'/>
          <div>
            <h5 className='text-lg font-medium'>Free Shipping</h5>
            <p className='text-gray-600'>On Orders Above $500</p>
          </div>
        </div>
        <div className='flex items-center gap-x-4'>
          <MdCurrencyExchange className='text-4xl text-black'/>
          <div>
            <h5 className='text-lg font-medium'>Member Discount</h5>
            <p className='text-gray-600'>Discount For Elite Members</p>
          </div>
        </div>
        <div className='flex items-center gap-x-4'>
          <BiSupport className='text-4xl text-black'/>
          <div>
            <h5 className='text-lg font-medium'>Fast Support</h5>
            <p className='text-gray-600'>24/7 Customer Support</p>
          </div>
        </div>
        <div className='flex items-center gap-x-4'>
          <TbPackageImport className='text-4xl text-black'/>
          <div>
            <h5 className='text-lg font-medium'>Easy Returns</h5>
            <p className='text-gray-600'>14 Days Easy Returns</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
