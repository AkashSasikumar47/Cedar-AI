import React from 'react'

const Hero = () => {
    return (
        <div>

            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                        <div className="md:pt-8">
                            <p className="text-left font-bold text-indigo-500 md:text-left">
                                Who we are
                            </p>
                            <h1 className="mb-4 text-left text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                                Our competitive advantage
                            </h1>
                            <p className="mb-2 text-gray-500 sm:text-lg md:mb-8">
                                San Francisco, CA, USA
                            </p>
                            <p className="mb-2 text-gray-500 sm:text-lg md:mb-8">
                                luke@email.com
                            </p>
                            <p className="mb-2 text-gray-500 sm:text-lg md:mb-8">
                                klio.framer.website
                            </p>
                        </div>
                        <div>
                            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                                    loading="lazy"
                                    alt="Photo by Martin Sanchez"
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero