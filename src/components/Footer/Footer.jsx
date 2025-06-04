import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-gray-700">
            {/* CTA Section */}
            <div className="text-center py-12 px-4">
                <div className="flex justify-center mb-4">
                    <div className="bg-black text-white rounded-full p-3">
                        <span className="text-2xl">✨</span>
                    </div>
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-2">Book An Appointment Today</h2>
                <p className="mb-6 text-gray-600 max-w-xl mx-auto">
                    Book an appointment with our handpicked mental health and wellness experts whenever or wherever you want!
                </p>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition">
                    Book Appointment →
                </button>
            </div>

            {/* Grid Links Section */}
            <div className="border-t border-gray-200 pt-10 pb-6 px-4 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt className="text-indigo-500" />+917863991096/ +919382861855 
                            </li>
                            <li className="flex items-start gap-2">
                                <FaMapMarkerAlt className="text-indigo-500 mt-1" />
                                <span>D. K. Industrial Estate II, Chhatral Gandhinagar, Gujarat - 382729</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-indigo-500" />info@sovisy.com
                            </li>
                        </ul>
                    </div>

                    {/* Navigate */}
                    <div>
                        <h3 className="font-semibold mb-4">Navigate</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>Services</li>
                            <li>Success Stories</li>
                            <li>Discover</li>
                            <li>Care</li>
                            <li>Download App</li>
                        </ul>
                    </div>

                    {/* Solution */}
                    <div>
                        <h3 className="font-semibold mb-4">Solution</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>Get in Touch</li>
                            <li>Technology</li>
                            <li>Who’re We?</li>
                            <li>Expertise</li>
                        </ul>
                    </div>

                    {/* Discover */}
                    <div>
                        <h3 className="font-semibold mb-4">Discover</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>Latest News</li>
                            <li>New Arrivals</li>
                            <li>Solution</li>
                            <li>Gain Profession</li>
                            <li>Career</li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="font-semibold mb-4">Follow Us</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-200 pt-6">
                    <p>
                        &copy; 2024 - Sovisy, Developed by Simtrak solutions
                    </p>
                    <div className="mt-2 space-x-4">
                        <a href="#" className="hover:underline">Privacy & Policy</a>
                        <a href="#" className="hover:underline">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
