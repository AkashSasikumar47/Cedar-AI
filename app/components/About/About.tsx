import React from 'react';

const About = () => {
    return (
        <>
            <section className="container bg-blue-300 max-w-screen-lg px-6 mx-auto">
                <div className="bg-gray-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-8 text-gray-800">About</dt>
                    <div className="sm:mt-0 sm:col-span-2">
                        <dd className="mt-2 sm:mt-0 sm:col-span-2 text-sm text-justify leading-6 text-gray-500">
                            I'm a dedicated web developer with a knack for turning ideas into reality. With a strong foundation in Computer Science and Engineering from SRM Institute of Science and Technology, I'm on a mission to create seamless digital experiences that leave a lasting impact.
                        </dd>
                        <dd className="mt-4 sm:col-span-2 text-sm text-justify leading-6 text-gray-500">
                            I thrive on challenges and enjoy every aspect of the development process, from coding to refining user interfaces. Let's work together to bring your vision to life!                        </dd>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;