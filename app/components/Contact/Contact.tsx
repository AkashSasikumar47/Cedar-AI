import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <section className="container bg-blue-300 max-w-screen-lg px-6 mx-auto">
                <dl className="divide-y divide-gray-500">
                    <div className="bg-gray-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-8 text-gray-800">Contact</dt>
                        <div className="bg-green-100 sm:mt-0 sm:col-span-2 text-sm leading-6 text-gray-500">
                            <h2 className="mt-2 sm:mt-0 sm:col-span-2 text-base font-medium leading-8 text-gray-800">
                                Looking to start a project or need consultation? Feel free to contact me.
                            </h2>
                            <h3 className="mt-1 text-xs leading-6 text-gray-500">San Francisco, CA, USA</h3>
                            <h3 className="mt-1 text-xs leading-6 text-gray-500"><a href="mailto:luke@email.com">luke@email.com</a></h3>
                            <h3 className="mt-1 text-xs leading-6 text-gray-500">
                                <a href="https://klio.framer.website">Available for work <span className="animate-blink text-green-500">•</span></a>
                            </h3>
                            <div className="flex mt-2">
                                <a href="#" className="mr-4"><FaLinkedin size={20} /></a>
                                <a href="#" className="mr-4"><FaTwitter size={20} /></a>
                                <a href="#" className="mr-4"><FaGithub size={20} /></a>
                            </div>
                        </div>
                    </div>
                </dl>
            </section>
        </>
    );
};

export default Contact;