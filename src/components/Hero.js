import React from 'react'
import { Link } from 'react-scroll';
import Image from "../images/down.png"

const Hero = () => {
    return (
        <div id="test" className="h-screen font-mono bg-black lg:bg-white flex flex-col justify-center items-center">
            <h1 className="text-white lg:text-black lg:text-9xl text-5xl  mb-14">Arvin Benipal
            </h1>
 
            <Link to="Content" smooth="true" duration="800">
                <img alt="down-arrow" className="flex h-6 animate-bounce" src={Image}/> 
            </Link>
        </div>

    )
    
}

export default Hero
