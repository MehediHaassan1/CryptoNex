import React from 'react';
import { FaStar } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";



const About = () => {
    return (
        <div className='my-16 flex flex-col gap-10 md:flex-row justify-between items-center'>
            <div>
                <h2 className='text-2xl mb-4 lg:text-3xl'>You do the business, we’ll handle the money.</h2>
                <p className='text-lg mb-4 lg:text-xl'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <button className='px-4 py-2 bg-[#BF1E2D] rounded-lg hover:bg-[#632b30] transition-all duration-300'>Get Started</button>
            </div>
            <div className='flex flex-col gap-6 '>
                <div className='flex items-center justify-between md:gap-4'>
                    <div className='w-16 h-16 rounded-full bg-[#BF1E2D]/10  flex justify-center items-center'>
                        <FaStar className='w-8 h-8 text-[#bf1e2d]' />
                    </div>
                    <div className='w-[240px] lg:w-[400px]'>
                        <h4 className='text-lg mb-2 lg:text-xl'>Rewards</h4>
                        <p className='lg:text-lg'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-4'>
                    <div className='w-16 h-16 rounded-full bg-[#BF1E2D]/10  flex justify-center items-center'>
                        <IoShieldCheckmarkSharp className='w-8 h-8 text-[#bf1e2d]' />
                    </div>
                    <div className='w-[240px] lg:w-[400px]'>
                        <h4 className='text-lg mb-2 lg:text-xl'>100% Secured</h4>
                        <p className='lg:text-lg'>We take proactive steps make sure your information and transactions are secure.</p>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-4'>
                    <div className='w-16 h-16 rounded-full bg-[#BF1E2D]/10  flex justify-center items-center'>
                        <IoIosSend className='w-8 h-8 text-[#bf1e2d]' />
                    </div>
                    <div className='w-[240px] lg:w-[400px]'>
                        <h4 className='text-lg mb-2 lg:text-xl'>Balance Transfer</h4>
                        <p className='lg:text-lg'>A balance transfer credit card can save you a lot of money in interest charges.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About