import React from 'react';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import bgVideo from "../assets/hotelVid.mp4"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero bgVideo={bgVideo} primaryDesc="Search Up Hotels" secondaryDesc="Minimizing Carbon Footprint" isHotel={true}/>
    </>
  );
};

export default App;