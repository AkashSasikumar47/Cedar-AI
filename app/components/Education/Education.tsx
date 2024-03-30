import React from 'react';

const Education = () => {
    return (
        <section className="container bg-blue-400 max-w-screen-lg px-6 mx-auto">
            <div className="bg-pink-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-32 sm:px-0">
                <dt className="text-sm font-medium leading-8 text-gray-800">Education</dt>
                <div className="mt-2 sm:mt-0 sm:col-span-2 sm:grid sm:grid-cols-1">
                    <div className="bg-green-100 flex flex-col text-sm leading-6 text-gray-500">
                        <h2 className="text-base font-medium leading-6 text-gray-800">B.Tech in Computer Science and Engineering</h2>
                        <h3 className="mt-0 text-xs leading-6 text-gray-500">SRM Institute of Science and Technology</h3>
                        <h3 className="mt-0 text-xs leading-6 text-gray-500">2021 — 2025</h3>
                        <dd className="mt-2 text-sm leading-6 text-gray-500">
                            Skilled in Full-stack development, Mobile application development, and agile software development methodologies.
                        </dd>
                    </div>
                    <div className="bg-gray-100 flex flex-col mt-2 text-sm leading-6 text-gray-500">
                        <h2 className="text-base font-medium leading-6 text-gray-800">B.Sc in Data Science & Applications</h2>
                        <h3 className="mt-0 text-xs leading-6 text-gray-500">IIT Madras</h3>
                        <h3 className="mt-0 text-xs leading-6 text-gray-500">2022-2025</h3>
                        <dd className="mt-2 text-sm leading-6 text-gray-500">
                            Proficient in data analysis, machine learning algorithms, and data visualization techniques.
                        </dd>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;