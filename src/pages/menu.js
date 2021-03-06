import React from 'react'

const Menu = () => {
    return (
        <div className="h-screen overflow-hidden px-8 bg-black">
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold text-white font-mono pt-14 tracking-widest"> MY SKILLS</h1>
            </div>

            <div className="relative w-full filter blur-2xl">

                <div className="absolute left-72 top-12 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply opacity-50 animate-blob"> </div>
                <div className="absolute right-80 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply opacity-80 animate-blob animation-delay-2000"> </div>
                <div className="absolute right-96 top-96 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply opacity-80 animate-blob animation-delay-4000"> </div>
                <div className="absolute left-96 top-96 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply opacity-80 animate-blob animation-delay-6000"> </div>

            </div>

            <div className="lg:px-48 pt-8 md:px-24 md:pt-14">
                    

                <div className="flex p-6 bg-gray-800 rounded-3xl shadow-lg opacity-75">
                    <ul className="font-mono text-xs text-white lg:text-sm px-3">
                        <li className="pb-3">• Strong customer communication skills in fast paced work environment </li>
                        <li className="py-3">• Experience in various programming frameworks</li>
                        <li className="py-3">• Familiar with using/creating data structures with active practice in Java programming language</li>
                        <li className="py-3">• Strong understanding in website development and UX design as well as SEO's for optimized search engine ranking</li>
                        <li className="py-3">• Worked with physical digital electronics as a part of academic courses</li>
                    </ul>

                    <ul className="font-mono text-xs text-white lg:text-sm px-3">
                        <li className="pb-4">• Strong knowledge in object oriented programming using languages such as C/C++ and python </li>
                        <li className="py-4">• Experience with using headsets to complete orders and communicate with staff</li>
                        <li className="py-4">• Translated concepts into user flows, wireframes, mockups and prototypes to promote positive intuitive designs</li>
                        <li className="py-4">• Experience with high traffic site interactions and user experiences data</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu