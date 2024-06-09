import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
                        <h4 className="text-white mb-4">Follow Us</h4>
                        <div className="flex">
                            <a href="#" className="text-gray-400 hover:text-white mr-4">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-12.5c.83 0 1.5.67 1.5 1.5S14.83 11 14 11s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-4 0c.83 0 1.5.67 1.5 1.5S10.83 11 10 11s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM12 14c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-7c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"
                                    />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-6.5h3v-1h-3v1zm0-2h3v-1h-3v1zm0-2h3V9h-3v1zm-4.5 4h1v-1h-1v1zm0-2h1v-1h-1v1zm0-2h1V9h-1v1zm-1.5 4.5h1v-3h-1v3zm0-3.5h1v-1h-1v1zm0-2h1V9h-1v1zm-2.5 4.5h1v-3h-1v3zm0-3.5h1v-1h-1v1zm0-2h1V9h-1v1zm-1.5 4.5h1v-3h-1v3zm0-3.5h1v-1h-1v1zm0-2h1V9h-1v1zm-2.5 4.5h1v-3h-1v3zm0-3.5h1v-1h-1v1zm0-2h1V9h-1v1zm-1.5 4.5h1v-3h-1v3zm0-3.5h1v-1h-1v1zm0-2h1V9h-1v1z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
                        <h4 className="text-white mb-4">Links</h4>
                        <ul className="list-none">
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    About
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Services
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
                        <h4 className="text-white mb-4">Company</h4>
                        <ul className="list-none">
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Careers
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Blog
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
                        <h4 className="text-white mb-4">Contact</h4>
                        <ul className="list-none">
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Email: info@example.com
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Phone: +1 123 456 7890
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Address: 123 Street, City, Country
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;