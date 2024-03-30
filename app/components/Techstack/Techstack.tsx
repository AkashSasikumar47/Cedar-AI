import React from 'react';
import './Techstack.css';

const Techstack = () => {
    return (
        <>
            <section className="container bg-blue-300 max-w-screen-lg px-6 mx-auto">
                <div className="bg-gray-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-32 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-800">Techstack</dt>
                    <div className="bg-red-100 mt-2 sm:mt-0 sm:col-span-2 sm:grid">
                        <div className="bg-red-100 sm:mt-0 sm:col-span-2 sm:grid">
                            <div className="techstack w-full">
                                <span className="loop-text-rl">JavaScript ✦ TypeScript ✦ Python ✦ C++ ✦ C ✦ JavaScript ✦ TypeScript ✦ Python ✦ C++ ✦ C ✦</span>
                                <span className="ml-1 loop-text-rl">JavaScript ✦ TypeScript ✦ Python ✦ C++ ✦ C ✦ JavaScript ✦ TypeScript ✦ Python ✦ C++ ✦ C ✦</span>
                            </div>
                        </div>
                        <div className="bg-red-100 sm:col-span-2 sm:grid">
                            <div className="techstack w-full">
                                <span className="loop-text-lr">NextJS ✦ ReactJS ✦ NodeJS ✦ ExpressJS ✦ HTML ✦ CSS ✦ NextJS ✦ ReactJS ✦ NodeJS ✦ ExpressJS ✦ HTML ✦ CSS ✦</span>
                                <span className="ml-1 loop-text-lr">NextJS ✦ ReactJS ✦ NodeJS ✦ ExpressJS ✦ HTML ✦ CSS ✦ NextJS ✦ ReactJS ✦ NodeJS ✦ ExpressJS ✦ HTML ✦ CSS ✦</span>
                            </div>
                        </div>
                        <div className="bg-red-100 sm:mt-0 sm:col-span-2 sm:grid">
                            <div className="techstack w-full">
                                <span className="loop-text-rl">MySQL ✦ PostgreSQL ✦ MongoDB ✦ MySQL ✦ PostgreSQL ✦ MongoDB ✦</span>
                                <span className="ml-1 loop-text-rl">MySQL ✦ PostgreSQL ✦ MongoDB ✦ MySQL ✦ PostgreSQL ✦ MongoDB ✦</span>
                            </div>
                        </div>
                        <div className="bg-red-100 sm:col-span-2 sm:grid">
                            <div className="techstack w-full">
                                <span className="loop-text-lr">Docker ✦ Kubernetes ✦ Git ✦ AWS ✦ Microsoft Azure ✦ Firebase ✦ Docker ✦ Kubernetes ✦ Git ✦ AWS ✦ Microsoft Azure ✦ Firebase ✦</span>
                                <span className="ml-1 loop-text-lr">Docker ✦ Kubernetes ✦ Git ✦ AWS ✦ Microsoft Azure ✦ Firebase ✦ Docker ✦ Kubernetes ✦ Git ✦ AWS ✦ Microsoft Azure ✦ Firebase ✦</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Techstack;