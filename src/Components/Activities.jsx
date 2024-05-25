import React from 'react'

function Activities() {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px] '>
      <div className='p-4 relative'>
        <h3 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
        <img className='w-full h-full object-cover border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1584132869994-873f9363a562?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='p-4 relative'>
        <h3 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruises</h3>
        <img className='w-full h-full object-cover border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1580166463495-ab4d21922c22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='p-4 relative'>
        <h3 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Excursions</h3>
        <img className='w-full h-full object-cover border-4 border-white shadow-lg' src="https://plus.unsplash.com/premium_photo-1661265851801-e523847e3932?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  )
}

export default Activities