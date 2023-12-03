import React from 'react'

const TryService = () => {
    return (
        <div className=' bg-gradient-to-r from-[#110f1c] to-[#3e3e44] rounded-lg p-4 md:p-12 my-16 flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-[500px] lg:w-[700px]'>
                <h3 className='text-center text-xl md:text-start md:text-3xl lg:text-5xl'>Let’s try our service now!</h3>
                <p className='my-4 lg:text-xl'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className='text-center'>
                <button className='px-4 py-2 bg-[#BF1E2D] rounded-lg'>Get Started</button>
            </div>
        </div>
    )
}

export default TryService