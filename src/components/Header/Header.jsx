import React from "react";
import "./header.scss";

import { logo } from "../../assets/images";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-inner container">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="header-nav">
          <li>
            <a href="#">overview</a>
          </li>
          <li>
            <a href="#">news</a>
          </li>{" "}
          <li>
            <a href="#">champions</a>
          </li>{" "}
          <li>
            <a href="#">support</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
