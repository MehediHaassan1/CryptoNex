import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";




const Footer = () => {
    return (
        <div className='bg-none md:bg-[#070911]'>

            <div className='hidden px-6 py-10 border-b border-stone-800 md:flex justify-between items-center'>
                <div>
                    <img src="https://i.ibb.co/z6M3NQB/SGN-11-30-2023-1701362693687.png" alt="brand-logo" className='w-28' />
                    <p className='w-[250px] lg:w-[350px] lg:text-lg'>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <div className='flex justify-between gap-10 lg:gap-20'>
                    <div className='leading-relaxed'>
                        <h5 className='text-[#BF1E2D] font-semibold mb-4 lg:text-lg'>Usefull Links</h5>
                        <p>Content</p>
                        <p>Create</p>
                        <p>Explore</p>
                        <p>Terms & Services</p>
                    </div>
                    <div className='leading-relaxed'>
                        <h5 className='text-[#BF1E2D] font-semibold mb-4 lg:text-lg'>Community</h5>
                        <p>Help Center</p>
                        <p>Partners</p>
                        <p>Suggestions</p>
                        <p>Blog</p>
                    </div>
                    <div className='leading-relaxed'>
                        <h5 className='text-[#BF1E2D] font-semibold mb-4 lg:text-lg'>Partner</h5>
                        <p>Our Partner</p>
                        <p>Become a Partner</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row justify-between items-center md:px-6'>
                <div>
                    <p className='text-xs text-center my-6 md:text-base lg:text-lg'>Copyright &copy; 2023 CryptoNex. All Rights Reserved.</p>
                </div>
                <div className='flex justify-center items-center gap-6'>
                    <FaInstagram className='w-6 h-6 hover:text-[#BF1E2D] transition-all duration-300' />
                    <FaFacebook className='w-6 h-6 hover:text-[#BF1E2D] transition-all duration-300' />
                    <FaTwitter className='w-6 h-6 hover:text-[#BF1E2D] transition-all duration-300' />
                    <FaLinkedin className='w-6 h-6 hover:text-[#BF1E2D] transition-all duration-300' />

                </div>
            </div>
        </div>
    )
}

export default Footer