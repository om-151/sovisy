import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import Logo from "../../assets/Main_Logo.webp"
import { FaArrowUp } from "react-icons/fa";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({
        sectors: false,
        projects: false,
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);
            setShowBackToTop(scrollY > 200); // Show button after scrolling 200px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const toggleDropdown = (key) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white/60"
                }`}
        >
            {/* Top Bar */}
            <div className="hidden md:flex justify-between items-center px-4 py-2 text-sm bg-gray-900 text-white">
                <div className="flex items-center space-x-4">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaPinterestP /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
                <div className="flex items-center space-x-6">
                    <span className="flex items-center"><MdEmail className="mr-1" /> info@example.com</span>
                    <span className="flex items-center"><MdPhone className="mr-1" /> 1800-123-456</span>
                    <span className="flex items-center"><MdLocationOn className="mr-1" /> Gandhinagar, Gujarat</span>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="flex items-center justify-between px-4 py-3 md:px-8">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="Logo" className="h-10 w-auto" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-gray-800 font-medium relative">
                    <li><a href="#" className="hover:text-blue-600">Home</a></li>
                    <li><a href="#" className="hover:text-blue-600">About us</a></li>

                    {/* Sectors Dropdown */}
                    <li
                        className="relative group"
                    >
                        <button className="flex items-center gap-1 hover:text-blue-600">
                            Market Sectors <FaChevronDown className="text-xs" />
                        </button>
                        <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-md border border-gray-200 hidden group-hover:block z-50">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Industrial</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Agriculture</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Construction</a></li>
                        </ul>
                    </li>

                    <li><a href="#" className="hover:text-blue-600">Applications</a></li>

                    {/* Projects Dropdown */}
                    <li className="relative group">
                        <button className="flex items-center gap-1 hover:text-blue-600">
                            Projects <FaChevronDown className="text-xs" />
                        </button>
                        <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-md border border-gray-200 hidden group-hover:block z-50">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Completed</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Ongoing</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Upcoming</a></li>
                        </ul>
                    </li>

                    <li><a href="#" className="hover:text-blue-600">Resources</a></li>
                    <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                </ul>

                {/* CTA */}
                <div className="hidden md:block">
                    <button className="bg-white/70 text-black px-4 py-2 rounded-full hover:bg-gray-100 transition border-2 border-black cursor-pointer">Get a Free Quote</button>
                </div>

                {/* Hamburger - Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <svg
                            className="w-6 h-6 text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white px-4 pb-4 shadow-md">
                    <ul className="space-y-3 text-gray-800 font-medium">
                        <li><a href="#" className="block hover:text-blue-600">Home</a></li>
                        <li><a href="#" className="block hover:text-blue-600">About</a></li>

                        {/* Sectors Toggle */}
                        <li>
                            <button
                                onClick={() => toggleDropdown("sectors")}
                                className="flex justify-between w-full items-center hover:text-blue-600"
                            >
                                Sectors <FaChevronDown className="text-xs" />
                            </button>
                            {dropdownOpen.sectors && (
                                <ul className="ml-4 mt-2 space-y-3">
                                    <li><a href="#" className="block hover:text-blue-600">Industrial</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Agriculture</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Construction</a></li>
                                </ul>
                            )}
                        </li>

                        <li><a href="#" className="block hover:text-blue-600">Applications</a></li>

                        {/* Projects Toggle */}
                        <li>
                            <button
                                onClick={() => toggleDropdown("projects")}
                                className="flex justify-between w-full items-center hover:text-blue-600"
                            >
                                Projects <FaChevronDown className="text-xs" />
                            </button>
                            {dropdownOpen.projects && (
                                <ul className="ml-4 mt-2 space-y-3">
                                    <li><a href="#" className="block hover:text-blue-600">Completed</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Ongoing</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Upcoming</a></li>
                                </ul>
                            )}
                        </li>

                        <li><a href="#" className="hover:text-blue-600">Resources</a></li>
                        <li><a href="#" className="block hover:text-blue-600">Contact</a></li>
                        <li>
                            <button className="w-full bg-white/70 text-black py-2 rounded-full hover:bg-gray-100 transition border-2 border-black cursor-pointer">
                                Get a Free Quote
                            </button>
                        </li>
                    </ul>
                </div>
            )}
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 bg-black text-white p-3 rounded-md shadow-lg hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                >
                    <FaArrowUp />
                </button>
            )}
        </header>
    );
};

export default Navbar;
