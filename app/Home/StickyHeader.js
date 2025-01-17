// components/Navbar.js
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky z-20 border-b shadow-md sm:top-0 sm:h-nav-desktop w-full gap-4 p-4 pt-2 sm:pt-4 hidden sm:flex sm:flex-row sm:items-center border-gray-800 bg-gray-900 shadow-gray-600/10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Logo</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="text-white hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-blue-500">About</Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-blue-500">Services</Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-blue-500">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
