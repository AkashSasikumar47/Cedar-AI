import React from 'react';

const Hero = () => {
    return (
        <main className="container bg-blue-400 max-w-screen-lg px-6 mx-auto">
            <div className="bg-blue-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-32 sm:px-0">
                {/* Left Column */}
                <div className="sm:px-0">
                    <div>
                        {/* Personal Info */}
                        <dt className="text-sm font-medium leading-6 text-gray-800">Kerala, India</dt>
                        <h3 className="mt-1 text-xs text-gray-500 mb-1">
                            <a href="mailto:akashsasikumar47@email.com">akashsasikumar47@gmail.com</a>
                        </h3>
                        <h3 className="mt-1 text-xs text-gray-500 mb-1">
                            <a href="#">Let's Connect</a>
                        </h3>
                    </div>
                </div>
                {/* Right Column */}
                <div className="mt-2 sm:mt-0 sm:col-span-2 text-sm leading-6 text-gray-900">
                    <div className="bg-red-100 flex flex-col mt-6 sm:mt-0 sm:col-span-2 text-gray-500">
                        {/* Profile Image */}
                        <img
                            src="/img/akash/profile.jpg"
                            loading="lazy"
                            alt="Photo by Austin Wade"
                            className="h-60 w-40 mb-6 object-cover rounded-4xl object-center transition duration-200 group-hover:scale-110"
                        />
                        {/* Introduction */}
                        <h1 className="text-lg font-medium leading-8 text-gray-800">
                            I'm Akash Sasikumar — Full Stack Developer
                        </h1>
                        <h2 className="mt-1 text-base leading-6 text-gray-500">
                            Passionate About Crafting Exceptional Digital Experiences
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;