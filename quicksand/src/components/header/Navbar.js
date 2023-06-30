import React, { CSSProperties } from "react";
import { Slide, Fade } from "react-awesome-reveal";

function Navbar() {
  return (
    <div className="navbar w-full">
      <ul className="w-full flex justify-center gap-20 px-10 align-center text-center items-center">
        <Fade duration={200} cascade={true} direction="up">
          <li>
            <h1 className="title">SeanFay</h1>
          </li>
          <li>
            <p className="item">Read</p>
          </li>
          <li>
            <p className="item">Shop</p>
          </li>
          <li>
            <p className="item">About</p>
          </li>
          <li>
            <p className="item">Contact</p>
          </li>
        </Fade>
      </ul>
    </div>
  );
}

export default Navbar;
