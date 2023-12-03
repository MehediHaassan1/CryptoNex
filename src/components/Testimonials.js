import React from 'react'

const Testimonials = () => {
    return (
        <div className='my-16'>
            <div className='md:flex gap-6 justify-evenly items-center my-20'>
                <h3 className='text-center md:text-start text-2xl md:text-3xl lg:text-4xl md:w-[300px]'>What people are saying about us</h3>
                <p className='hidden md:block w-[400px] lg:text-lg'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3 my-20'>
                <div className='px-4 py-6 bg-gradient-to-r from-[#110f1c] to-[#3e3e44] rounded-lg relative'>
                    <span className='mt-4 text-6xl bg-gradient-to-r from-[#BF1E2D] to-white text-transparent bg-clip-text'>"</span>
                    <p className='mb-12'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                    <div className='flex gap-4 items-center mt-10 absolute bottom-0'>
                        <img src="https://i.ibb.co/bKwMyHw/herman-jensen.png" alt="herman-jensen" className='w-12 h-12' />
                        <div className='pb-4'>
                            <h4 className='text-lg'>Herman Jensen</h4>
                            <p className='font-light'>Founder & Leader</p>
                        </div>
                    </div>
                </div>

                <div className='px-4 py-6 hidden md:block relative'>
                    <span className='mt-4 text-6xl bg-gradient-to-r from-[#BF1E2D] to-white text-transparent bg-clip-text'>"</span>
                    <p className='mb-12'>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
                    <div className='flex gap-4 items-center mt-10 absolute bottom-0'>
                        <img src="https://i.ibb.co/sJgds5F/steve-mark.png" alt="steve-mark" className='w-12 h-12' />
                        <div className='pb-4'>
                            <h4 className='text-lg'>Steve Mark</h4>
                            <p className='font-light'>Founder & Leader</p>
                        </div>
                    </div>
                </div>

                <div className='px-4 py-6 hidden md:block relative'>
                    <span className='mt-4 text-6xl bg-gradient-to-r from-[#BF1E2D] to-white text-transparent bg-clip-text'>"</span>
                    <p className='mb-12'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                    <div className='flex gap-4 items-center mt-10 absolute bottom-0'>
                        <img src="https://i.ibb.co/VjdfhdJ/kenn-gallagher.png" alt="kenn-gallagher" className='w-12 h-12' />
                        <div className='pb-4'>
                            <h4 className='text-lg'>Kenn Gallagher</h4>
                            <p className='font-light'>Founder & Leader</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials