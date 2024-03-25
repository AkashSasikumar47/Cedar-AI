import React from 'react';

const Hero = () => {
    return (
        <>
            <main className="container bg-blue-400 max-w-screen-lg px-6 mx-auto">
                <div className="bg-blue-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
                    {/* Left Column */}
                    <div className="bg-green-100 sm:grid sm:px-0">
                        <div>
                            {/* Signature 
                            <img
                                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                loading="lazy"
                                alt="Photo by Austin Wade"
                                className="h-24 w-36 object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                            */}
                            <dt className="text-sm font-medium leading-8 text-gray-800">Kerala, India</dt>
                            <h3 className="mt-1 text-xs text-gray-500 mb-1"><a href="mailto:akashsasikumar47@email.com">akashsasikumar47@gmail.com</a></h3>
                            <h3 className="mt-1 text-xs text-gray-500 mb-1"><a href="#">Let's Connect</a></h3>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="bg-green-100 mt-2 sm:mt-0 sm:col-span-2 text-sm leading-6 text-gray-900">
                        <div className="bg-red-100 flex flex-col mt-6 sm:mt-0 sm:col-span-2 text-sm leading-6 text-gray-500">
                            {/*
                            <img
                                src="/img/akash/profile.jpg"
                                loading="lazy"
                                alt="Photo by Austin Wade"
                                className="h-60 w-40 object-cover rounded-4xl object-center transition duration-200 group-hover:scale-110"
                            />
                               */}
                            <h1 className="text-lg font-medium leading-8 text-gray-800">I'm Akash Sasikumar — Full Stack Developer</h1>
                            <h2 className="mt-1 text-base leading-6 text-gray-500">Passionate About Crafting Exceptional Digital Experiences</h2>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Hero;