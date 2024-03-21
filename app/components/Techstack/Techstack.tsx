import React from 'react';
import './Techstack.css';

const Techstack = () => {
    return (
        <>
            <section className="container bg-blue-300 max-w-screen-lg px-6 mx-auto">
                <dl className="divide-y divide-gray-500">
                    <div className="bg-gray-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-8 text-gray-800">Techstack</dt>

                        <div className="bg-red-100 mt-6 sm:mt-0 sm:col-span-2 sm:grid">
                            <div className="bg-red-100 mt-6 sm:mt-0 sm:col-span-2 sm:grid">
                                <div className="techstack w-full">
                                    <span className="loop-text-rl">JavaScript ✦ TypeScript ✦ Python ✦ C++ ✦ C ✦ MySQL ✦ PostgreSQL ✦ MongoDB ✦</span>
                                    <span className="ml-1 loop-text-rl">JavaScript ✦ TypeScript ✦ Python ✦ C++ ✦ C ✦ MySQL ✦ PostgreSQL ✦ MongoDB ✦</span>
                                </div>
                            </div>
                            <div className="bg-red-100 sm:col-span-2 sm:grid">
                                <div className="techstack w-full">
                                    <span className="loop-text-lr">NextJS ✦ ReactJS ✦ NodeJS ✦ ExpressJS ✦ HTML ✦ CSS ✦ Docker ✦ Kubernetes ✦ Git ✦ AWS ✦ Microsoft Azure ✦</span>
                                    <span className="ml-1 loop-text-lr">NextJS ✦ ReactJS ✦ NodeJS ✦ ExpressJS ✦ HTML ✦ CSS ✦ Docker ✦ Kubernetes ✦ Git ✦ AWS ✦ Microsoft Azure ✦</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </dl>
            </section>
        </>

    );
};

export default Techstack;
