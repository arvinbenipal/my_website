import React from 'react'
import ImageOne from "../images/Profilepic.png"

const Content = () => {
    return (
            <div id="Content" className="h-screen flex flex-col justify-center">
                <div classname= "lg:grid lg:grid-cols-2">
                    <div >
                        <img alt="car" className="mx-auto h-40 md:h-48" src={ImageOne} />
                    </div>
                    <div >
                        <h1 className="p-12 md:px-48 lg:px-72 font-mono text-center lg:text-lg md:text-md text-xs">
                            I am a motivated worker with outstanding customer experience, 
                            seeking to obtain a position in an industry where my relevant 
                            skills and experience can be utilized, while learning various 
                            new techniques that will assist me in the progress of the organization. 
                            My skills in both the physical and technical side of the workplace 
                            can be used to ensure an effective and productive work experience for me as well as the employer.
                        </h1>
                    </div>
                </div>
            </div>
    )
}

export default Content
