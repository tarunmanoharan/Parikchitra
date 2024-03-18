// import React, { useState, useEffect } from 'react';
// function Snav() {
//     const [navColour, updateNavbar] = useState(false);

//     useEffect(() => {
//         function scrollHandler() {
//             if (window.scrollY >= 20) {
//                 updateNavbar(true);
//             } else {
//                 updateNavbar(false);
//             }
//         }

//         window.addEventListener('scroll', scrollHandler);

//         return () => {
//             window.removeEventListener('scroll', scrollHandler);
//         };
//     }, []);

//     return (
//         
//     );
// }

// export default Snav;

import React from 'react';
import '../css/Snav.css';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from 'react-icons/ai';


function Snav() {
    return (
        <nav className="Snav-navbar">
            <div className="Snav-container">
                <Link to="/" className="Snav-logo">
                    <p>Parikchitra</p>
                </Link>
                <div className="Snav-menu">
                    <ul>
                        <li>
                            <Link to="/" className="Snav-link">
                                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="Snav-link">
                                <AiOutlineUser style={{ marginBottom: '2px' }} /> My profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="Snav-link">
                                <AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} /> Logout                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Snav;
