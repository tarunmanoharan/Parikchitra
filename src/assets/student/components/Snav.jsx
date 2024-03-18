// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from 'react-icons/ai';
// import { CgFileDocument } from 'react-icons/cg';

// import '../css/Snav.css'; // Make sure to import your CSS file

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
//         <nav className={navColour ? 'sticky Snav-navbar' : 'Snav-navbar'}>
//             <div className="Snav-container">
//                 <Link to="/" className="logo">
//                     <p style={{ fontFamily: 'cursive' }}>Tarun</p>
//                 </Link>
//                 <div className="menu">
//                     <ul>
//                         <li>
//                             <Link to="/" onClick={() => updateNavbar(false)}>
//                                 <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/about" onClick={() => updateNavbar(false)}>
//                                 <AiOutlineUser style={{ marginBottom: '2px' }} /> About
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/project" onClick={() => updateNavbar(false)}>
//                                 <AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} /> Projects
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/resume" onClick={() => updateNavbar(false)}>
//                                 <CgFileDocument style={{ marginBottom: '2px' }} /> Resume
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Snav;

import React from 'react'

function Snav() {
  return (
    <nav clas>
        <div>hello</div>
    </nav>
  )
}

export default Snav