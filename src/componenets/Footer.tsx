import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-cyan-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-2xl font-bold">
              MEDICARE
            </a>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="/about" className="hover:underline">
              About Us
            </a>
            <a href="/services" className="hover:underline">
              Services
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* Copyright Notice */}
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
