import React from 'react'
import { Link } from 'react-scroll';

const Sideebar = () => {
    return (
        <nav className="sm:invisible  lg:visible fixed pl-16 py-96  font-mono">
            <nav className="py-3">
                <Link to="Home" smooth="true" duration="800" className='hover:bg-red-400 rounded-lg p-2 hover:shadow-md hover:text-white'>Home</Link>
            </nav>
            <nav className="py-3">
                <Link to="Contentt" smooth="true" duration="800" className='hover:bg-red-400 rounded-lg p-2 hover:shadow-md hover:text-white'>Menu</Link>
            </nav>
            <nav className="py-3">
                <Link to="About" smooth="true" duration="800" className='hover:bg-red-400 rounded-lg p-2 hover:shadow-md hover:text-white'>About</Link>
            </nav>
            <nav className="py-3">
                <Link to="Contact" smooth="true" duration="800" className='hover:bg-red-400 rounded-lg p-2 hover:shadow-md hover:text-white'>Contact</Link>
            </nav>
        </nav>
    )
}

export default Sideebar
