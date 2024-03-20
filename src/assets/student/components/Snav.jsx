import React, { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';

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
    <nav className="flex items-center justify-between h-20 bg-gray-800 text-white px-4">
      <div className="flex items-center">
        {/* Sidebar Toggle Button */}
        <button className="mr-4 focus:outline-none" onClick={toggleSidebar}>
          <FaBars className="w-6 h-6" />
        </button>

        {/* Website Title */}
        <div className="text-xl font-bold">Parikchitra</div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-20 h-[calc(100vh-5rem)] bg-gray-700 transition-all duration-300 ${
          isSidebarOpen ? 'w-1/5' : 'w-0'
        }`}
      >
        {/* Add your sidebar content here */}
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
  );
};

export default Navbar;