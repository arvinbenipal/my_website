import React from 'react'

const contact = () => {
    return (
        <div id="Contact" className="overflow-hidden h-screen bg-black">

            <div className="flex justify-center">
                <h1 className="text-3xl font-bold text-white font-mono pt-10 pb-6 tracking-widest"> Contact</h1>
            </div>
           
            <div className="flex justify-center pt-6 font-mono text-xs">

                <div className="bg-blue-400 max-w-4xl p-8 rounded-3xl opacity-80">  
                    <div className="py-5">
                        <input className="w-full p-3 placeholder-gray-400 tracking-wider" placeholder="Name"></input>
                    </div>
                    <div className="py-5">
                        <input className="w-full p-3 placeholder-gray-400 tracking-wider" placeholder="Email"></input>
                    </div>
                    <div className="py-5">
                        <input className="w-full p-3 pb-28 placeholder-gray-400 tracking-wider" placeholder="Message"></input>
                    </div>
                    <div className="py-5">
                        <button className="bg-black text-white p-3 px-36 md:px-48 rounded-full w-full hover:bg-gray-800">Send</button>
                    </div>    
                </div>

            </div>
        </div>
    )
}

export default contact
