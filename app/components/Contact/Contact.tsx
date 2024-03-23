import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <section className="container bg-red-100 max-w-screen-lg px-6 mx-auto">
                <div className="bg-blue-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-8 text-gray-800">Contact</dt>
                    <div className="bg-green-100 sm:mt-0 sm:col-span-2 text-sm leading-6 text-gray-500">
                        <h2 className="mt-2 sm:mt-0 sm:col-span-2 text-base font-medium leading-8 text-gray-800">
                            Feel free to reach out to me via email or phone for any inquiries or opportunities. You can also connect with me on LinkedIn or check out my GitHub profile to see more of my work.
                        </h2>
                        <h3 className="mt-1 text-xs leading-6 text-gray-500">Malappuram, Kerala, India</h3>
                        <h3 className="mt-1 text-xs leading-6 text-gray-500"><a href="mailto:akashsasikumar47@email.com">akashsasikumar47@gmail.com</a></h3>
                        <h3 className="mt-1 text-xs leading-6 text-gray-500">
                            <a href="https://klio.framer.website"><span className="animate-blink text-green-500">•</span> Available for work</a>
                        </h3>
                        <div className="flex mt-2">
                            <a href="https://www.linkedin.com/in/akash-sasikumar47" className="mr-4"><FaLinkedin size={16} /></a>
                            <a href="https://github.com/AkashSasikumar47" className="mr-4"><FaGithub size={16} /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;