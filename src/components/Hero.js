import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-evenly items-center md:gap-6 my-10'>
            <div className='text-center my-4 md:my-0 md:text-start'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl'>Welcome to <span className='text-[#BF1E2D]'>CryptoNex</span> - Your Decentralized Trading Hub!</h1>
                <p className='my-6 lg:text-lg'>Trade confidently and securely on our cutting-edge platform. CryptoNex combines user-friendly design with top-notch security, offering a seamless decentralized exchange experience.</p>
                <button className='px-4 py-2 bg-[#BF1E2D] rounded-lg hover:bg-[#632b30] transition-all duration-300'>Sign up</button>
            </div>
            <div className="w-[300px] md:w-[1000px] bg-[url('https://i.ibb.co/qgTv14n/hero-background-1.png')] bg-cover bg-no-repeat bg-center ">
                <img src="https://i.ibb.co/tYJv65M/hero-banner-1.png" alt="hero-banner" className='w-[300px] md:w-[1000px]' />
            </div>
        </div>
    )
}

export default Hero