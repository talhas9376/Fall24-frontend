import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div className="icon">
        <h2 className="logo">TALHA</h2>
      </div>
      <div className="menu">
        <ul>
          {['HOME', 'ABOUT', 'SERVICE', 'DESIGN', 'CONTACT'].map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="search">
        <input className="srch" type="search" placeholder="Type to text" />
        <button className="btn">Search</button>
      </div>
    </div>
  );
}

export default Navbar;
