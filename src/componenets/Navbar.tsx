import { FaHandHoldingMedical } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <FaHandHoldingMedical className="text-3xl text-cyan-800" />
                    <h1 className="text-xl font-bold text-gray-800">MEDICARE</h1>
                </div>

                {/* Search Bar (Visible on Both Desktop & Mobile) */}
                <div className="flex-1 flex justify-center">

                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex gap-6 font-medium text-gray-700">

                    <li className="hover:text-cyan-600 transition duration-300">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="hover:text-cyan-600 transition duration-300">
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li className="hover:text-cyan-600 transition duration-300">
                        <Link to="/department">DEPARTMENT</Link>
                    </li>
                    <li className="hover:text-cyan-600 transition duration-300">
                        <Link to="/docters">DOCTORS</Link>
                    </li>
                    <li className="hover:text-cyan-600 transition duration-300">
                        <Link to="/labs">LABS</Link>
                    </li>
                    <li className="hover:text-cyan-600 transition duration-300">
                        <Link to="/blog">BLOG</Link>
                    </li>
                    <li className="hover:text-cyan-600 transition duration-300">
                        <Link to="/contect">CONTACT</Link>
                    </li>
                    <li className="hover:text-cyan-600 transition duration-300">
                        <Link to="/login"></Link>
                    </li>
                </ul>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-gray-700"
                    onClick={handleClick}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`${isOpen ? "block" : "hidden"
                    } md:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-5 z-50`}
            >
                <ul className="flex flex-col gap-4 font-medium text-gray-700">

                    <li className="hover:text-cyan-600 transition duration-300">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="hover:text-cyan-600 transition duration-300">
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li className="hover:text-cyan-600 transition duration-300">
                        <Link to="/department">DEPARTMENT</Link>
                    </li>
                    <li className="hover:text-cyan-600 transition duration-300">
                        <Link to="/docters">DOCTORS</Link>
                    </li>
                    <li className="hover:text-cyan-600 transition duration-300">
                        <Link to="/labs">LABS</Link>
                    </li>
                    <li className="hover:text-cyan-600 transition duration-300">
                        <Link to="/blog">BLOG</Link>
                    </li>
                    <li className="hover:text-cyan-600 transition duration-300">
                        <Link to="/contect">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
