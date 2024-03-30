import React from 'react';

const Experience = () => {
    return (
        <section className="container bg-blue-300 max-w-screen-lg px-6 mx-auto">
            <div className="bg-gray-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-32 sm:px-0">
                <dt className="text-sm font-medium leading-8 text-gray-800">Experience</dt>
                <div className="mt-2 sm:mt-0 sm:col-span-2 sm:grid">
                    <div className="bg-green-100 flex flex-col text-sm leading-6 text-gray-500">
                        <h2 className="text-base font-medium leading-8 text-gray-800">UI/UX Designer</h2>
                        <h3 className="mt-0 text-xs leading-6 text-gray-500">Feelpixel - UX Design Studio</h3>
                        <h4 className="mt-0 text-xs leading-6 text-gray-500">Pune, Maharashtra, India (Remote)</h4>
                        <h4 className="mt-0 text-xs leading-6 text-gray-500">August 2023 - October 2023</h4>
                        <dd className="mt-2 text-sm leading-6 text-gray-500">
                            As a UI/UX Designer at Feelpixel, I crafted user-centered digital solutions for mobile apps, web apps, and websites. I translated complex business needs into intuitive, engaging designs and collaborated with a dynamic team to push the boundaries of innovation in UX design.
                        </dd>
                    </div>
                    <div className="bg-red-100 flex flex-col mt-2 text-sm leading-6 text-gray-500">
                        <h2 className="text-base font-medium leading-8 text-gray-800">Software Developer Intern</h2>
                        <h3 className="mt-0 text-xs leading-6 text-gray-500">FACTS Computer Software House L.L.C</h3>
                        <h4 className="mt-0 text-xs leading-6 text-gray-500">Dubai, United Arab Emirates (On-site)</h4>
                        <h4 className="mt-0 text-xs leading-6 text-gray-500">June 2023 - July 2023</h4>
                        <dd className="mt-2 text-sm leading-6 text-gray-500">
                            During my internship at FACTS Computer Software House L.L.C, I gained hands-on experience in various departments, including digital marketing, web development, sales, project management, R&D, customer support, and administration. I contributed to the software development of their ERP system and provided valuable insights to enhance FACTS' processes, efficiency, and growth prospects.
                        </dd>
                    </div>
                    <div className="grid gap-4 grid-cols-3 mt-4 gap-4">
                        <div className="relative flex aspect-square flex-col rounded-2xl sm:rounded-4xl bg-black hover:bg-gray-800 p-4 text-center text-white transition duration-300">
                            <span className="text-xs text-gray-500">Projects Completed</span>
                            <span className="text-sm font-bold lg:text-base">10</span>
                        </div>
                        <div className="relative flex aspect-square flex-col rounded-2xl sm:rounded-4xl bg-black hover:bg-gray-800 p-4 text-center text-white transition duration-300">
                            <span className="text-xs text-gray-500">Projects Completed</span>
                            <span className="text-sm font-bold lg:text-base">10</span>
                        </div>
                        <div className="relative flex aspect-square flex-col rounded-2xl sm:rounded-4xl bg-black hover:bg-gray-800 p-4 text-center text-white transition duration-300">
                            <span className="text-xs text-gray-500">Projects Completed</span>
                            <span className="text-sm font-bold lg:text-base">10</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;