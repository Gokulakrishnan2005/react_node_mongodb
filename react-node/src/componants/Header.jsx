import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Personal Site</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link to="/portfolio" className="hover:text-gray-300">
          Portfolio
        </Link>
        <Link to="/contact" className="hover:text-gray-300">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;