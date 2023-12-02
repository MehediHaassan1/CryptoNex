import React from 'react'

const Info = () => {
    return (
        <div className='my-16 mx-6 md:mx-0 border border-gray-200 rounded-lg md:border-none flex flex-col md:flex-row justify-between items-center gap-6 px-6 md:px-0 py-2'>
            <div className='w-full flex justify-between md:justify-evenly items-center'>
                <h3 className='text-xl lg:text-2xl'>3800+</h3>
                <p className='font-semibold text-sm lg:text-lg bg-gradient-to-r from-[#BF1E2D] to-white text-transparent bg-clip-text text-right uppercase'>user active</p>
            </div>
            <div className='w-full flex justify-between items-center md:justify-evenly  md:border-x'>
                <h3 className='text-xl lg:text-2xl'>20+</h3>
                <p className='font-semibold text-sm lg:text-lg bg-gradient-to-r from-[#BF1E2D] to-white text-transparent bg-clip-text text-right uppercase'>TRUSTED BY COMPANY</p>
            </div>
            <div className='w-full flex justify-between md:justify-evenly items-center'>
                <h3 className='text-xl lg:text-2xl'>$230M+</h3>
                <p className='font-semibold text-sm lg:text-lg bg-gradient-to-r from-[#BF1E2D] to-white text-transparent bg-clip-text text-right uppercase'>TRANSACTION</p>
            </div>
        </div>
    )
}

export default Info