import React from 'react';
import '/src/index.scss';
import FAQs from '../About/FAQs';
import Hotels from '../Hotels/Hotels';

const Hero = (props) => {
  return (
    <header className='w-screen h-screen relative'>
      <video
        src={props.bgVideo}
        className='w-full h-full object-cover'
        autoPlay
        loop
        muted
      />
      <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center'>
        <h1 className='text-white mb-2'>{props.primaryDesc}</h1>
        <h2 className='text-white mb-4'>{props.secondaryDesc}</h2>
        <h4 className='text-white mb-4'>{props.paragraph}</h4>
        {props.FAQs && <FAQs />}
        {props.isHotel && <Hotels />}
      </div>
    </header>
  );
};

export default Hero;
