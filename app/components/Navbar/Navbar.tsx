import React, { useState } from 'react';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className={`bg-white sm:pb-12 ${isDarkMode ? 'dark' : ''}`}>
                <div className="mx-auto bg-red-300 max-w-screen-lg px-6">
                    <header className="bg-orange-100 flex items-center justify-between py-8">
                        {/* Logo on the left */}
                        <a
                            href="/"
                            className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
                            aria-label="logo"
                        >
                            <img
                                src="/assets/logo.svg" // Path to your SVG logo file
                                alt="Flowrift Logo" // Alt text for accessibility
                                className="h-auto w-16" // Adjust size as needed
                            />
                        </a>

                        {/* Icon for menu toggle on small screens */}
                        <button
                            className="md:hidden flex items-center gap-2 rounded-lg bg-black px-3 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700"
                            onClick={toggleMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 7h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0 5h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0 5h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {/* Navigation links in the middle */}
                        <nav className={`md:flex flex-grow justify-center space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                About
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                Blog
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                Projects
                            </a>
                        </nav>

                        {/* Icon for dark and light mode toggle */}
                        <button
                            className="hidden md:flex items-center gap-2 rounded-lg bg-black px-3 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700"
                            onClick={toggleDarkMode}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                {isDarkMode ? (
                                    <path
                                        fillRule="evenodd"
                                        d="M10 0a10 10 0 0 0-6.992 16.872A8.5 8.5 0 0 1 10 2.5V0z"
                                        clipRule="evenodd"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        d="M10 0a10 10 0 0 1 6.992 16.872A8.5 8.5 0 0 0 10 2.5V0z"
                                        clipRule="evenodd"
                                    />
                                )}
                            </svg>
                        </button>
                    </header>
                </div>
            </div>
        </div>
    );
};

export default Navbar;