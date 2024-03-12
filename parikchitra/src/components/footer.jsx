import React from "react";
import "./footer.css"
import{
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";

import {FaLinkedinIn} from "react-icons/fa";

export const Footer =()=>{

    let date = new Date();
    let year = date.getFullYear();

    return(
        <div className="footer-container">
            
            <span className="footer-copyright">
                <h3>Parikchitra</h3>
            </span>

            <span className="footer-copyright">
                <h3>Copyright © {year} </h3>
            </span>
            
            <span className="footer-body">
                <ul className="footer-icons">

                   <li className="social-icons">
                     <a 
                      href="https://"
                      style={{color: "white"}}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                     >
                        <AiOutlineTwitter/>
                     </a>
                   </li>

                   <li className="social-icons">
                    <a
                    href=""
                    style={{color: "white"}}
                    target="_blank"
                    rel=" noopener noreferrer"
                    aria-label="Instagram"
                    >
                        <AiFillInstagram/>
                    </a>
                   </li>
                   
                   <li className="social-icons">
                    <a
                    href=""
                    style={{color: "white"}}
                    target="_blank"
                    rel=" noopener noreferrer"
                    aria-label="Linkiden"
                    >
                        <FaLinkedinIn/>
                    </a>
                   </li>


                </ul>
            </span>

        </div>
    )

}