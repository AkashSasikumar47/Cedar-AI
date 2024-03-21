import React from 'react';

const Experience = () => {
    return (
        <>
            <section className="container bg-blue-300 max-w-screen-lg px-6 mx-auto">
                <dl className="divide-y divide-gray-500">
                    <div className="bg-gray-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-8 text-gray-800">Experience</dt>

                        <div className="mt-6 sm:mt-0 sm:col-span-2 sm:grid">
                            <div className="bg-green-100 flex flex-col text-sm leading-6 text-gray-500">
                                <h2 className="text-base font-medium leading-8 text-gray-800">Senior UX/UI Designer</h2>
                                <h3 className="mt-1 text-xs leading-6 text-gray-500">SuperCo</h3>
                                <h3 className="mt-1 text-xs leading-6 text-gray-500">2019 — Present</h3>
                                <dd className="mt-2 text-sm leading-6 text-gray-500">
                                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                    qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                    pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                </dd>
                            </div>
                            <div className="bg-red-100 flex flex-col text-sm leading-6 text-gray-500">
                                <h2 className="text-base font-medium leading-8 text-gray-800">Senior UX/UI Designer</h2>
                                <h3 className="mt-1 text-xs leading-6 text-gray-500">SuperCo</h3>
                                <h3 className="mt-1 text-xs leading-6 text-gray-500">2019 — Present</h3>
                                <dd className="mt-2 text-sm leading-6 text-gray-500">
                                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                    qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                    pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                </dd>
                            </div>
                            <div className="grid gap-4 grid-cols-3 gap-4">
                                <div className="relative flex aspect-square flex-col rounded-lg bg-white p-4 text-center">
                                    <span className="text-gray-500">Men</span>
                                    <span className="text-lg font-bold text-gray-800 lg:text-xl">
                                        Business Causual
                                    </span>
                                </div>
                                <div className="relative flex aspect-square flex-col rounded-lg bg-white p-4 text-center">
                                    <span className="text-gray-500">Men</span>
                                    <span className="text-lg font-bold text-gray-800 lg:text-xl">
                                        Business Causual
                                    </span>
                                </div>
                                <div className="relative flex aspect-square flex-col rounded-lg bg-white p-4 text-center">
                                    <span className="text-gray-500">Men</span>
                                    <span className="text-lg font-bold text-gray-800 lg:text-xl">
                                        Business Causual
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </dl>
            </section>
        </>
    );
};

export default Experience;