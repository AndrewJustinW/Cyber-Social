import React from 'react'

const Login = () => {
    return (
        <div className="login">
            <div className="login-wrapper">

                <div className="login-top">

                    <h3 className="login-logo">CyberSocial</h3>
                    <span className="login-cta">
                        Connect with friends and the world around you on CyberSocial.
                    </span>

                </div>

                <div className="login-bottom">

                    <div className="login-box">

                        <input placeholder="Email" className="login-input" />
                        <input placeholder="Password" className="login-input" />

                        <button className="login-button">Log In</button>
                        <span className="login-forgot">Forgot Password?</span>

                        <button className="login-register-button">
                            Create a New Account
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
