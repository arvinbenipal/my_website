import React from 'react'

const contact = () => {
    return (
        <div id="Contact" className="h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-blue-400 w-full max-w-4xl sm:w-3/4 p-8 px-20 rounded-3xl">
                <h1 className="font-mono text-center text-3xl py-5"> Contact Form</h1>
                <div className="py-3">
                    <input className="p-3 pr-20 placeholder-gray-400" placeholder="Name"></input>
                </div>
                <div className="py-3">
                    <input className="p-3 pr-20 placeholder-gray-400" placeholder="Email"></input>
                </div>
                <div className="py-3">
                    <input className="w-full p-3 pb-28 placeholder-gray-400" placeholder="Message"></input>
                </div>
                <div className="py-3">
                    <button className="bg-blue-100 p-3 rounded-full w-full hover:bg-blue-200">Send</button>
                </div>
                
            </div>
        </div>
    )
}

export default contact
