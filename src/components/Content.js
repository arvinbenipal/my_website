import React from 'react'
import ImageOne from "../images/Profilepic.png"

const Content = () => {
    return (
            <div id="Content" className="h-screen bg-gradient-to-b from-black via-gray-800 to-black flex flex-col justify-center items-center">
                <div classname= "lg:grid lg:grid-cols-2">
                    <div >
                        <img alt="car" className="mx-auto h-40 md:h-48" src={ImageOne} />
                    </div>
                    
                    <div class="grid grid-flow-col grid-cols-2 grid-rows-2 gap-6 gap-y-10 text-xs pt-10 font-mono mx-8 md:mx-48 lg:mx-96 opacity-80">
                        <div className="p-6 bg-gray-200 rounded-3xl shadow-lg opacity-70 font-bold transform hover:scale-105"> Education
                            <div className="font-normal pt-2"> Computer Science (BSc) at Wilfrid Laurier University</div>
                        </div>
                        <div className="p-6 bg-gray-200 rounded-3xl shadow-lg opacity-70 font-bold transform hover:scale-105"> Coding Expertise
                            <div className="font-normal pt-2"> Python and C object oriented programming </div>
                        </div>
                        <div className="p-6 bg-gray-200 rounded-3xl shadow-lg opacity-70 font-bold transform hover:scale-105"> Web Development 
                            <div className="font-normal pt-2"> Experience with HTML, CSS, JS, and SEO optimization </div>
                        </div>

                        <div className="p-6 bg-gray-200 rounded-3xl shadow-lg opacity-70 font-bold transform hover:scale-105"> E-commerce
                            <div className="font-normal pt-2"> Led and assisted in multiple online start-ups </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Content
