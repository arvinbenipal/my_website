import React from 'react'
import { Link } from 'react-scroll';
import Image from "../images/down.png"

const Hero = () => {
    return (
        <div id="Home" className="font-mono sm:bg-black lg:bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="sm:text-white lg:text-black lg:text-9xl text-6xl  mb-14">
                Arvin Benipal
            </h1>
 
            <Link to="Content" smooth="true" duration="800">
                <img alt="down-arrow" className="absolute bottom-12 h-6 animate-bounce " src={Image}/> 
            </Link>
        </div>

    )
    
}

export default Hero
