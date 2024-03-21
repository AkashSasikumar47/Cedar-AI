import React from 'react'

const Education = () => {
    return (
        <>
            <section className="container bg-blue-400 max-w-screen-lg px-6 mx-auto">
                <dl className="divide-y divide-gray-500">
                    <div className="bg-pink-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-8 text-gray-800">Education</dt>

                        <div className="mt-6 sm:mt-0 sm:col-span-2 sm:grid sm:grid-cols-1">
                            <div className="bg-green-100 flex flex-col text-sm leading-6 text-gray-500">
                                <h2 className="text-base font-medium leading-8 text-gray-800">Master of Arts in Interaction Design</h2>
                                <h3 className="mt-1 text-xs leading-6 text-gray-500">Stanford University</h3>
                                <h3 className="mt-1 text-xs leading-6 text-gray-500">2012 — 2014</h3>
                                <dd className="mt-2 text-sm leading-6 text-gray-500">
                                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                </dd>
                            </div>
                            <div className="bg-gray-100 flex flex-col text-sm leading-6 text-gray-500">
                                <h2 className="text-base font-medium leading-8 text-gray-800">Master of Arts in Interaction Design</h2>
                                <h3 className="mt-1 text-xs leading-6 text-gray-500">Stanford University</h3>
                                <h3 className="mt-1 text-xs leading-6 text-gray-500">2012 — 2014</h3>
                                <dd className="mt-2 text-sm leading-6 text-gray-500">
                                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                </dd>
                            </div>
                            <div className="bg-red-200 flex flex-col text-sm leading-6 text-gray-500">
                                <h2 className="text-base font-medium leading-8 text-gray-800">Master of Arts in Interaction Design</h2>
                                <h3 className="mt-1 text-xs leading-6 text-gray-500">Stanford University</h3>
                                <h3 className="mt-1 text-xs leading-6 text-gray-500">2012 — 2014</h3>
                                <dd className="mt-2 text-sm leading-6 text-gray-500">
                                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                </dd>
                            </div>
                        </div>
                    </div>
                </dl>
            </section>
        </>
    )
}

export default Education