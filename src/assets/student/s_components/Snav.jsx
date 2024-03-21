import React, { useState } from 'react';
import { FaBars, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import '../s-css/Snav.css';

const Snav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars className="icon" />
        </button>
        <div className="website-title">Parikchitra</div>
      </div>

      <div
        className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}
      >
        {isSidebarOpen && (
          <div className="sidebar-content">
            <ul>
              <li>Updates</li>
              <li>Certifications</li>
              <li>Results</li>
            </ul>
            <div className="logout">
              <FaSignOutAlt className="icon" />
              <span>Logout</span>
            </div>
          </div>
        )}
      </div>

      <div className="nav-right">
        <div className="profile-container">
          <button className="profile-toggle" onClick={toggleProfile}>
            <FaUserCircle className="icon" />
          </button>
          <div className={`profile-dropdown ${isProfileOpen ? 'show' : ''}`}>
            <a href="#">Profile</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Snav;