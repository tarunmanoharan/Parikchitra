import React, { useState } from 'react';
import { FaBars, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <nav className="flex items-center justify-between h-20 bg-gray-800 text-white px-4">
        <div className="flex items-center">
          {/* Sidebar Toggle Button */}
          <button className="mr-4 focus:outline-none" onClick={toggleSidebar}>
            <FaBars className="w-6 h-6" />
          </button>

          {/* Website Title */}
          <div className="text-xl font-bold ml-8">Parikchitra</div>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed left-0 top-20 h-[calc(100vh-5rem)] bg-gray-700 text-white transition-all duration-300 ${
            isSidebarOpen ? 'w-1/5' : 'w-0'
          }`}
        >
          <div className="p-4">
            <ul>
              <li className="mb-2">Updates</li>
              <li className="mb-2">Certifications</li>
              <li className="mb-2">Results</li>
            </ul>
            <div className="mt-4 flex items-center">
              <FaSignOutAlt className="w-4 h-4 mr-2" />
              <span>Logout</span>
            </div>
          </div>
        </div>

        {/* Profile and Logout */}
        <div className="relative">
          <button className="focus:outline-none" onClick={toggleProfile}>
            <FaUserCircle className="w-6 h-6" />
          </button>

          {/* Profile and Logout Options */}
          <div
            className={`absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-md ${
              isProfileOpen ? 'block' : 'hidden'
            }`}
          >
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              My Profile
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Logout
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Your main content goes here */}
      </main>

      <footer className="bg-gray-800 text-white py-4 px-4 flex justify-between items-center">
        <div>
          <p className="text-sm">© 2023 Parikchitra. All rights reserved.</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;