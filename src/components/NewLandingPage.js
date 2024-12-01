// NewLandingPage.js
import React from 'react';
import Hero from '../components/NewHome/Hero';
import Features from '../components/NewHome/HomeFeatures';
import GameMode from '../components/NewHome/GameMode';
import Stocks from '../components/NewHome/StocksMode';
import Leagues from '../components/NewHome/Leagues';
import Community from '../components/NewHome/Community';
import HomeTools from '../components/NewHome/HomeTools';
import CallToAction from '../components/EarlyAccessTemplate';
import VideoFrame from '../components/VideoFrame';

function NewLandingPage() {
    return (
        <div className='overflow-hidden'>
            <Hero/>
            <Features/>
            <GameMode/>
            <Stocks/>
            <Leagues/>
            <Community/>
            <HomeTools/>
            <VideoFrame/>
            <CallToAction/>
        </div>
    );
}

export default NewLandingPage;
