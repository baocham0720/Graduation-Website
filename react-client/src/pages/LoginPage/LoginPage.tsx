import React from 'react';
import './LoginPage.css';

const LoginForm = () => {
    return (
      <div className='loginpage'>
        <div className="login-form-container">
        <form className="login-form">
            <h2>Login</h2>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div className="options">
                <div className="remember-me">
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>
            </div>
            <button type="submit">Login</button>
            <div className="signup-link">
                Don't have an account? <a href="#">Sign up</a>
            </div>
        </form>
    </div>
    </div>
    );
};

export default LoginForm;
