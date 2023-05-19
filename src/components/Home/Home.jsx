import React from 'react'
import headerVid from "../../Assets/video.mp4"
function Home() {
  return (
    <div>
        <video 
          className='object-cover w-full h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] absolute -z-10' 
          autoPlay loop muted src={headerVid} alt="" />
        <div className='text-white h-[80vh] flex flex-col justify-center items-center px-4'>
          <h1>Decentralized</h1>
          <h1 className='py-3'><span className='text-cyan-400'>Trading</span> Protocol</h1>
          <p className='text-xl py-5 text-center'>Guaranteed Liquidity trading for millions of users and top Ethereum applications</p>
          <div>
            <button className='px-7'>Get Hiring</button>
            <button className='ml-3 px-7'>FAQ</button>
          </div>
        </div>
        <p className='text-white text-center font-bold'>Total Volume Secured : $42, 104, 783, 662.47</p>
    </div>
  )
}

export default Home