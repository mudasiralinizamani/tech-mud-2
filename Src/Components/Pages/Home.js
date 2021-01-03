import React from "react";

import HeroSection from "../HeroSection"

import Navbar from "../Navbar"

import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'

function Home() {
  return (
    <>
      <header>
      <Navbar />
      </header>
      <HeroSection {...homeObjOne}/>
      <HeroSection {...homeObjTwo}/>
      <HeroSection {...homeObjThree}/>
      <HeroSection {...homeObjFour}/>
    </>
  );
}

export default Home;
