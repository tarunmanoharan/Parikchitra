import React, { useState } from 'react';
import '../css/Slogin.css';

const SLogin = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className='container'>

            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }} >Register</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <input type="text" placeholder="Username" />
                </div>}
                <div className="input">
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input">
                    <input type="text" placeholder="Email" />
                </div>
                <div className="input">
                    <input type="text" placeholder="Password" />
                </div>
            </div>
            <div className="lostpassword">
                {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
            </div>
        </div>
    );
};

export default SLogin;