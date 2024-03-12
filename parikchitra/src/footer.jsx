import React from "react";
import{
    AiFillGithub,
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

        </div>
    )

}