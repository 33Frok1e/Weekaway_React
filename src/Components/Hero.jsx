import React from 'react'

function Hero() {
  return (
    <div className="w-full h-[90vh] relative">
      <img
        src="https://images.pexels.com/photos/3319712/pexels-photo-3319712.jpeg"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <div className='max-w-[1140px] m-auto'>
        <div className="absolute top-[40%] w-full max-w-[600px] md:-[50%] h-full flex flex-col text-white p-4">
            <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
            <h2 className="text-4xl italic py-4">With Weekaway</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsam consectetur, possimus amet reprehenderit totam, officia ipsa quae, minus fugit odit quidem molestias magni deleniti nisi ab? Laudantium, neque eius.officia ipsa quae, minus.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero