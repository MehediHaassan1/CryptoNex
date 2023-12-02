import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Coin from './components/Coin';
import Features from './components/Features';
import MoreFeatures from './components/MoreFeatures';
import Info from './components/Info';
import About from './components/About';

const App = () => {
    return (
        <div className='bg-[#070e1f] text-white px-2 xl:px-0'>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto'>
                <Hero></Hero>
                <Coin></Coin>
                <Features></Features>
                <MoreFeatures></MoreFeatures>
                <Info></Info>
                <About></About>
            </div>
        </div>
    )
}

export default App