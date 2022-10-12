import React from "react";
import "./button.scss";

export const Button = (props) => {
  return <button className={`btn ${props.className}`}>{props.children}</button>;
};
