'use client'
import React from 'react'

function Landing() {
    function clickHandler() {
        var clickbtn = document.getElementById('clickBTN')

        // clickbtn.style.height = '100%'
        // clickbtn.style.width = '100%'
        // clickbtn.style.top = '0'
        // clickbtn.style.left = '0'
        // clickbtn.style.borderRadius = '0'
        // clickbtn.style.transition = 'all 0.5s ease-in-out'
        // clickbtn.style.backgroundColor = 'rgba(0,0,0,0.5)'
        // clickbtn.style.zIndex = '999'
        // clickbtn.style.display = 'flex'
        // clickbtn.style.justifyContent = 'center'
        // clickbtn.style.alignItems = 'center'
        // clickbtn.style.transform = 'translate(0,0)'

    }
    return (
        <div className='relative h-[calc(100vh-72px)] flex  p-5'>
            <div className='flex-1 flex flex-col justify-center gap-5'>
                <h1 className='text-5xl font-bold'>GeoSuchana</h1>
                <p className='text-2xl'>A platform for geospatial data of all across Nepal</p>
                <div className='flex gap-5'>
                    <button className='bg-gray-800 hover:bg-gray-600 delay-75 cursor-pointer text-white px-5 py-2 rounded-lg'>Get Started</button>
                    <button className='bg-red-800 hover:bg-red-600 delay-75 text-white px-5 cursor-pointer py-2 rounded-lg'>Documentation</button>
                </div>
            </div>
            <div className='flex-1 flex flex-col justify-center gap-5'>
                <p className='font-bold sm:text-2xl text-xl font-["Poppins"]'>Pixels by Pixels, We are covering Nepal</p>
                <div className="flex rounded-xl bg-slate-100">
                    <img src="https://i.ibb.co/VY9xPY5/geosuchana-Nepal.png" alt="Nepal Data" />
                </div>
            </div>
            <div onClick={() => clickHandler()} id='clickBTN' className="absolute flex-col font-bold text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-32 w-32 text-white bg-gray-800 flex justify-center items-center cursor-pointer hover:bg-gray-700 duration-1000 ease-in-out">
                Get your Location
            </div>
        </div>
    )
}

export default Landing