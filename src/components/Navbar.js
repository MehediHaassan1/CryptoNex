import React from 'react'

const Navbar = () => {
    return (
        <div className='max-w-7xl mx-auto flex justify-between items-center py-4'>
            <div>
                <img src="https://i.ibb.co/z6M3NQB/SGN-11-30-2023-1701362693687.png" alt="logo" className='w-10' />
            </div>
            <div>
                <button className='ml-4 '>Sign In</button>
                <button className='ml-4 px-4 py-2 bg-[#BF1E2D] rounded-lg'>Sign up</button>
            </div>
        </div>
    )
}

export default Navbar