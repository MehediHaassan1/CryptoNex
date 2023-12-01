import React from 'react'

const Coin = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-4'   >
            <div className='w-[300px] bg-[url("https://i.ibb.co/jbKf8hr/crypto-background-1.jpg")] bg-cover bg-no-repeat bg-center flex justify-between items-center p-4 rounded-lg'>
                <div>
                    <div className='w-[140px] flex justify-between items-center font-semibold'>
                        <h4>BTC</h4>
                        <p>0.20%</p>
                    </div>
                    <div>
                        <p>$34,111.92</p>
                    </div>
                </div>
                <div className='w-12'>
                    <img src="https://i.ibb.co/nLvfv8F/bitcoin.png" alt="bitcoin-logo" />
                </div>
            </div>
            <div className='w-[300px] bg-[url("https://i.ibb.co/DCpC0P8/crypto-background-2.jpg")] bg-cover bg-no-repeat bg-center flex justify-between items-center p-4 rounded-lg'>
                <div>
                    <div className='w-[140px] flex justify-between items-center font-semibold'>
                        <h4>ETH</h4>
                        <p>0.16%</p>
                    </div>
                    <div>
                        <p>$1,792.76</p>
                    </div>
                </div>
                <div className='w-12'>
                    <img src="https://i.ibb.co/CVRwDRz/eth-coin.png" alt="eth-coin-logo" />
                </div>
            </div>
            <div className='w-[300px] bg-[url("https://i.ibb.co/tbsZ36x/crypto-background-3.jpg")] bg-cover bg-no-repeat bg-center flex justify-between items-center p-4 rounded-lg'>
                <div>
                    <div className='w-[140px] flex justify-between items-center font-semibold'>
                        <h4>SOL</h4>
                        <p>0.53%</p>
                    </div>
                    <div>
                        <p>$32.44</p>
                    </div>
                </div>
                <div className='w-12'>
                    <img src="https://i.ibb.co/cYQ5DKm/sol-coin.png" alt="sol-coin-logo" />
                </div>
            </div>
            <div className='w-[300px] bg-[url("https://i.ibb.co/y4RgzDw/crypto-background-4.jpg")] bg-cover bg-no-repeat bg-center flex justify-between items-center p-4 rounded-lg'>
                <div>
                    <div className='w-[140px] flex justify-between items-center font-semibold'>
                        <h4>MATIC</h4>
                        <p>0.23%</p>
                    </div>
                    <div>
                        <p>$0.6248</p>
                    </div>
                </div>
                <div className='w-12'>
                    <img src="https://i.ibb.co/0fjdFcc/matic-coin.png" alt="matic-coin-logo" />
                </div>
            </div>
        </div>
    )
}

export default Coin