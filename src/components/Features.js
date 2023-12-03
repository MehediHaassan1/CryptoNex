import React from 'react'

const Features = () => {
    const featureText = [
        {
            id: 1,
            title: 'Coin Swap',
            description: 'Seamless Cryptocurrency Exchange',
            btn: 'Swap',
            picture: 'https://i.ibb.co/8XxStPx/coin-swap.png'
        },
        {
            id: 2,
            title: 'Defi Platform',
            description: 'Unlock your financial freedom to fly',
            btn: 'Go now',
            picture: 'https://i.ibb.co/m0Nr1S9/defi-platform.png'
        },
        {
            id: 3,
            title: 'Online Shop',
            description: 'Embark on a delightful shopping journey with care to cater',
            btn: 'Buy now',
            picture: 'https://i.ibb.co/RPf0Fwk/shop.png'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-16 justify-items-center'>
            {
                featureText.map(item => <div key={item.id}
                    className='flex justify-between items-center w-[300px] lg:w-[300px] border border-white-400 gap-6 md:w-[250px] md:gap-2 p-2 bg-gradient-to-r from-white/20 via-black  rounded-xl'
                >
                    <div className='w-12'>
                        <img src={item.picture} alt={item.title} />
                    </div>
                    <div>
                        <h4 className='text-lg font-semibold mb-2'>{item.title}</h4>
                        <p className='mb-2 '>{item.description}</p>
                        <button className='rounded- lg px-4 py-1 bg-[#BF1E2D] rounded-lg hover:bg-[#632b30] transition-all duration-300]'>{item.btn}</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Features