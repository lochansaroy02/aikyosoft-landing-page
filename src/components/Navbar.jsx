import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); // Track active section

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Contact', id: 'contact' },
    ];

    // Scroll to the respective section
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setOpen(false); // Close menu on mobile after clicking
        }
    };

    // Set up Intersection Observer to track visible sections
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6, // Trigger when 60% of the section is visible
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id); // Update active section
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        navItems.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });

        return () => {
            // Cleanup observer on unmount
            navItems.forEach((item) => {
                const section = document.getElementById(item.id);
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="fixed top-0 w-screen z-40 bg-slate-800 bg-opacity-50 backdrop-blur-lg border-b border-slate-400 flex justify-between items-center p-4">
            {/* Logo Section */}
            <div className="w-48">
                <img
                    className="object-cover w-[75%] h-[75%]"
                    src={logo}
                    alt="Company Logo"
                />
            </div>

            {/* Navigation Items */}
            <div
                className={`lg:static absolute top-16 right-0 lg:top-auto lg:right-auto lg:flex lg:gap-4 lg:backdrop-blur-none backdrop-blur-lg bg-slate-800 lg:border-none lg:bg-transparent  border-t border-slate-400 border-l lg:h-fit h-screen lg:selection:px-12 py-2 lg:p-0 w-1/4 transition-transform duration-300  ease-in-out 
                ${open ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0`}
            >
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => handleScroll(item.id)}
                        className={`text-slate-300 my-2 mx-2  flex lg:hover: hover:bg-slate-600 hover:text-slate-200 active:bg-slate-500 text-base items-center active:text-white ease-in-out duration-300 lg:flex lg:justify-center px-2 py-2 rounded-md list-none cursor-pointer font-poppins
                        ${activeSection === item.id ? 'bg-slate-600' : ''}`}
                    >
                        {item.name}
                    </li>
                ))}
            </div>

            {/* Mobile Menu Icon */}
            <div
                onClick={() => setOpen(!open)}
                className="lg:hidden flex items-center mx-4 cursor-pointer"
            >
                <FaBars className="text-slate-300 text-xl" />
            </div>
        </div>
    );
};

export default Navbar;
