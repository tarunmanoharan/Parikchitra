import React from 'react';
import '../s-css/Scourses.css';

const Scourses = () => {
  return (
    <div className="courses-container">
      <div className="courses-navbar">
        <div className="explore-courses">
          <span>Explore Courses</span>
        </div>
        <div className="enrolled-courses">
          <span>Enrolled Courses</span>
        </div>
      </div>
      
      <div className="courses-content">
        <div className="explore-courses-list">
          
          {/* Add your course list components here */}
        </div>
        <div className="enrolled-courses-list">
          
          {/* Add your enrolled course list components here */}
        </div>
      </div>
    </div>
  );
};

export default Scourses;