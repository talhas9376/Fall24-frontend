import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaSkype } from 'react-icons/fa';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Logged in with ${email}`);
  };

  return (
    <div className="form">
      <h2>Login Here</h2>
      <input
        type="email"
        placeholder="Enter Email Here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password Here"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btnn" onClick={handleLogin}>
        Login
      </button>
      <p className="link">
        Don't have an account?
        <br />
        <a href="#">Sign up </a> here
      </p>
      <p className="liw">Log in with</p>
      <div className="icons">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaGoogle /></a>
        <a href="#"><FaSkype /></a>
      </div>
    </div>
  );
}

export default LoginForm;
