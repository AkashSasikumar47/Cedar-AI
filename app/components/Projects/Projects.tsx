import React from 'react';

const Projects = () => {
    return (
        <>
            <section className="container bg-blue-100 max-w-screen-lg px-6 mx-auto">
                <dl className="divide-y divide-gray-500">
                    <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-8 text-gray-800">Projects</dt>
                        <div className="grid gap-6 sm:grid-cols-2 mt-2 sm:mt-0 sm:col-span-2">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1">
                                {/* First aspect-square card */}
                                <a
                                    href="#"
                                    className="group relative flex aspect-square items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1620243318482-fdd2affd7a38?auto=format&q=75&fit=crop&w=750"
                                        loading="lazy"
                                        alt="Photo by Fakurian Design"
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                                    <div className="relative flex flex-col">
                                        <span className="text-gray-300">Home</span>
                                        <span className="text-lg font-semibold text-white lg:text-xl">
                                            Decoration
                                        </span>
                                    </div>
                                </a>
                                {/* Second aspect-square card */}
                                <a
                                    href="#"
                                    className="group relative flex aspect-square items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750"
                                        loading="lazy"
                                        alt="Photo by Fakurian Design"
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                                    <div className="relative flex flex-col">
                                        <span className="text-gray-300">Modern</span>
                                        <span className="text-lg font-semibold text-white lg:text-xl">
                                            Furniture
                                        </span>
                                    </div>
                                </a>
                            </div>

                            <div className="bg-red-100">
                                {/* Fill vertical card */}
                                <a
                                    href="#"
                                    className="group relative flex sm:h-full sm:w-full aspect-video items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750"
                                        loading="lazy"
                                        alt="Photo by Fakurian Design"
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                                    <div className="relative flex flex-col">
                                        <span className="text-gray-300">Modern</span>
                                        <span className="text-lg font-semibold text-white lg:text-xl">
                                            Furniture
                                        </span>
                                    </div>
                                </a>
                            </div>

                            <div className="bg-pink-200 aspect-video sm:col-span-2">
                                {/* Aspect-video card */}
                                <a
                                    href="#"
                                    className="group relative flex aspect-video items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750"
                                        loading="lazy"
                                        alt="Photo by Fakurian Design"
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                                    <div className="relative flex flex-col">
                                        <span className="text-gray-300">Modern</span>
                                        <span className="text-lg font-semibold text-white lg:text-xl">
                                            Furniture
                                        </span>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </dl>
            </section>
        </>
    );
};

export default Projects;
