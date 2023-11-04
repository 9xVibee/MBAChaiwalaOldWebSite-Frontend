import React from "react";
import logo from '../assests/logo.png'
import {BsMouse} from 'react-icons/bs'
function Misc() {
  return (
    <>
      <div className="cursor"></div>
      <a href="/" className="logo">
        <img src={logo} alt="logo" data-cursorpointer={true}/>
      </a>
      <a href="/franchise" className="franchiseBtn" data-cursorpointer={true}>
        GET A FRANCHISE
      </a>
      <BsMouse className="scrollBtn" data-cursorpointer={true}/>
    </>
  );
}

export default Misc;
