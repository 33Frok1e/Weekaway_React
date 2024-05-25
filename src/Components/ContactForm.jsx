import React from 'react'

function ContactForm() {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700'>Send us a message</h2>
        <p className='text-center text-gray-700 py-2'>We're standing by</p>
        <div className='grid md:grid-cols-2'>
            <img className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]' src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <form action="">
                <div className='grid grid-cols-2'>
                    <input className='border p-2 m-2 outline-none' type="text" placeholder='First' />
                    <input className='border p-2 m-2 outline-none' type="text" placeholder='Last' />
                    <input className='border p-2 m-2 outline-none' type="email" placeholder='Email' />
                    <input className='border p-2 m-2 outline-none' type="tel" placeholder='Phone' />
                    <input className='border col-span-2 p-2 m-2 outline-none' type="text" placeholder='Address' />
                    <textarea className='border col-span-2 m-2 p-2 outline-none' rows={10} cols={70} placeholder='Text Your Query...'></textarea>
                    <button className='col-span-2 m-2'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactForm