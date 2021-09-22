import React from 'react'

const Register = () => {
    return (
        <div className="register">
            <div className="register-wrapper">

                <div className="register-top">

                    <h3 className="register-logo">CyberSocial</h3>
                    <span className="register-cta">
                        Sign up to connect with friends and the world around you on CyberSocial.
                    </span>

                </div>

                <div className="register-bottom">

                    <div className="register-box">

                        <input placeholder="Email" type="email" className="register-input" required />
                        <input placeholder="Username" type="text" className="register-input" required />
                        <input placeholder="Password" type="password" className="register-input" required />
                        <input placeholder="Confirm Password" type="password" className="register-input" required />



                        <button className="register-button">Sign Up</button>
                        <span className="register-forgot">Forgot Password?</span>

                        <span className="register-page-login">
                            Already have an account? <span className="register-login-link">Login here.</span>
                        </span>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register
