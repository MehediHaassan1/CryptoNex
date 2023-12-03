import React from 'react'

const Company = () => {
    return (
        <div className='my-16 flex flex-col justify-center items-center gap-16 md:flex-row md:gap-12 md:justify-between'>
            <img src="https://i.ibb.co/cxG7Y82/airbnb.png" alt="airbnb" className='w-48 md:w-32 lg:w-48' />
            <img src="https://i.ibb.co/gMS58Z9/binance.png" alt="binance" className='w-48 md:w-32 lg:w-48' />
            <img src="https://i.ibb.co/vHhZvsd/coinbase.png" alt="coinbase" className='w-48 md:w-32 lg:w-48' />
            <img src="https://i.ibb.co/dtN1HYB/dropbox.png" alt="dropbox" className='w-48 md:w-32 lg:w-48' />
        </div>
    )
}

export default Company