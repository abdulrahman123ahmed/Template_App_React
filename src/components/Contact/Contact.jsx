import React from 'react'

function Contact() {
  return (
    <div className='px-8 py-16 bg-black'>
      <div className='text-white text-center'>
        <h1 className='py-4'>Contact Us</h1>
        <p className='py-4 mb-5 text-lg w-4/5 mx-auto'>
          The Defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace
        </p>
      </div>
      <form className='grid grid-cols-1 justify-items-center'>
        <input type="text" placeholder='Your Name' className=' bg-transparent border w-[80%] p-4' />
        <input type="email" placeholder='Your Email' className=' bg-transparent border w-[80%] p-4 my-10' />
        <input type="tel" placeholder='Your Phone' className=' bg-transparent border w-[80%] p-4' />
        <textarea placeholder='Your Message' className=' bg-transparent border w-[80%] h-[40vh] p-4 my-10' />
      </form>
      <button className='text-white mx-36'>Read More</button>
    </div>
  )
}

export default Contact