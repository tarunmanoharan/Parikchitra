import React, { useState } from 'react';
import '../css/Slogin.css';

const SLogin = () => {
    const [action, setAction] = useState("Login");

    const handleSubmit = () => {
        if (action === "Login") {
            // Handle login submission logic
        } else if (action === "Sign Up") {
            // Handle sign up submission logic
        }
    };

    return (
        <div className='container'>
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Register</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
            <div className="inputs">
                {action === "Login" ? (
                    <>
                        <div className="input">
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Password" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="input">
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Password" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Confirm Password" />
                        </div>
                    </>
                )}
            </div>
            <div className="login-button-container">
                <button className="login-button" type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default SLogin;
