import React from 'react'

const MoreFeatures = () => {
    return (
        <div className='my-16 flex flex-col-reverse items-center md:flex-row gap-4'>
            <div className='flex flex-col gap-6'>
                <div className='flex justify-between items-center gap-6'>
                    <img src="https://i.ibb.co/MVXgyTd/tradingcard.png" alt="tradingcard" className='w-20' />
                    <div>
                        <h4 className='text-lg mb-4 lg:text-3xl'>Easy to Trade</h4>
                        <p className='text-sm lg:text-lg'>Your intuitive and secure gateway to decentralized cryptocurrency trading.</p>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-6'>
                    <img src="https://i.ibb.co/9HQQN1c/paymentmethod.png" alt="paymentmethod" className='w-20' />
                    <div>
                        <h4 className='text-lg mb-4 lg:text-3xl'>Many Payment Methods</h4>
                        <p className='text-sm lg:text-lg'>Versatile platform, myriad ways to pay for seamless transactions.</p>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-6'>
                    <img src="https://i.ibb.co/JkfgqpR/securitycard.png" alt="securitycard" className='w-20' />
                    <div>
                        <h4 className='text-lg mb-4 lg:text-3xl'>100% Secure</h4>
                        <p className='text-sm lg:text-lg'>Your trust is our priority, ensuring a rock-solid foundation for your digital assets.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[url('https://i.ibb.co/svmYW4K/mobile-wallet-background.png')] bg-cover bg-no-repeat bg-center w-[200px] mb-10 md:w-4/5 xl:w-3/5 md:mb-0">
                <img src="https://i.ibb.co/6X53Y5K/mobile-wallet.png" alt="mobile-wallet" className='w-full' />
            </div>
        </div>
    )
}

export default MoreFeatures