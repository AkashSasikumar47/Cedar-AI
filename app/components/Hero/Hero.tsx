import React from 'react'

const Hero = () => {
    return (
        <>
            <main className="container bg-blue-100 max-w-screen-lg px-6 mx-auto">
                <dl className="divide-y divide-gray-500">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-8 text-gray-800">Name</dt>
                        <div className="bg-green-100 mt-2 sm:mt-0 sm:col-span-2 text-sm leading-6 text-gray-900">
                            <img
                                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                loading="lazy"
                                alt="Photo by Austin Wade"
                                className="h-full w-full object-cover rounded-4xl object-center transition duration-200 group-hover:scale-110"
                            />
                            <div className="bg-red-100 flex flex-col mt-6 sm:mt-0 sm:col-span-2 text-sm leading-6 text-gray-500">
                                <h1 className="text-lg font-medium leading-8 text-gray-800">I’m Luke Stone — product designer</h1>
                                <h2 className="mt-0 sm:mt-0 sm:col-span-2 text-base leading-6 text-gray-500">This is the main content of the page.</h2>
                            </div>
                        </div>
                    </div>
                </dl>
            </main >
        </>
    )
}

export default Hero