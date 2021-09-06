import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'
import About from './about'
import Contact from './contact'
import Menu from './menu'

const Home = () => {
    return (
        <>
            <Hero />
            <Content />
            <Menu />
            <About />
            <Contact />
        </>
    )
}

export default Home
