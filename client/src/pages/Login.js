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

                        <input placeholder="Email" className="login-input" type="email" />
                        <input placeholder="Password" className="login-input" type="password" />

                        <button className="login-button">Log In</button>
                        <span className="login-forgot">Forgot Password?</span>

                        <span className="login-page-register">
                            New to CyberSocial? <span className="login-register-link">Sign up here.</span>
                        </span>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
