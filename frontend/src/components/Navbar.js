import React from 'react';

export default function Navbar(props) {
  return (
    <div className={props.mode}>
      <nav>
        <img src="./icons/logo.png" alt="logo" className="nav--logo"></img>
        <ul className="nav--list">
          <li></li>
          <li>LOGIN</li>
          <li>ABOUT</li>
        </ul>
      </nav>
    </div>
  );
}
