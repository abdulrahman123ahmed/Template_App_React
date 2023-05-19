import React from 'react'
import imgDevelop from "../../Assets/Develop.png"
import icon1 from "../../Assets/work-steps-1.png"
import icon2 from "../../Assets/work-steps-2.png"
import icon3 from "../../Assets/work-steps-3.png"

function Developer() {
  return (
    <div className='grid place-items-center grid-cols-1 lg:grid-cols-2 px-8 py-16 bg-black'>
      <img src={imgDevelop} alt="" className=' w-4/5 mx-auto mb-20' />
      <div className='info'>
        <div className='flex items-center'>
          <img src={icon1} alt="" className=' w-28' />
          <div className='mx-4'>
            <h3 className='text-3xl font-bold mb-4 text-white'>Business Analysis</h3>
            <p className=' w-4/5 leading-relaxed text-gray-400'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel
            </p>
          </div>
        </div>
        <div className='flex items-center my-20'>
          <img src={icon2} alt="" className='w-28' />
          <div className='mx-4'>
            <h3 className='text-3xl font-bold mb-4 text-white'>Architecture</h3>
            <p className=' w-4/5 leading-relaxed text-gray-400'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel
            </p>
          </div>
        </div>
        <div className='flex items-center'>
          <img src={icon3} alt="" className=' w-28' />
          <div className='mx-4'>
            <h3 className='text-3xl font-bold mb-4 text-white'>Development</h3>
            <p className=' w-4/5 leading-relaxed text-gray-400'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Developer