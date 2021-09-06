import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';



const NavvBar = ({toggle}) => {
    return (
        <nav className="sticky hidden">
            <nav className="flex justify-between items-center h-16 bg-white text-grey-500 shadow-sm font-mono"
            role="navigation">
                <Link onClick={() => scroll.scrollToTop()} className="text-left pl-8">
                    ARVIN BENIPAL
                </Link>
            <div className= "px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg className="w-6 h-6" fill="none" 
                stroke="currentColor" viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" 
                strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </div>
            <div className='pr-8 md:block hidden'>
                <Link to='/' className='hover:bg-red-400 rounded-lg p-2 hover:shadow-md hover:text-white'>Home</Link>
                <Link to="Contentt" smooth="true" duration="800" className='hover:bg-red-400 rounded-lg p-2 hover:shadow-md hover:text-white'>Menu</Link>
                <Link to="About" smooth="true" duration="800" className='hover:bg-red-400 rounded-lg p-2 hover:shadow-md hover:text-white'>About</Link>
                <Link to='/contact' className='hover:bg-red-400 rounded-lg p-2 hover:shadow-md hover:text-white'>Contact</Link>
            </div>

            </nav>
        </nav>
    )
}

export default NavvBar
