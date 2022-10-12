import React from "react";
import "./section.scss";

export const Section = (props) => {
  return <div className={`section ${props.className}`}>{props.children}</div>;
};

export const SectionContent = (props) => {
  const bgImage = props.bgImage
    ? {
        backgroundImage: `url(${props.bgImage})`,
      }
    : {};
  return (
    <div className={`section-content ${props.className}`} style={bgImage}>
      {props.children}
    </div>
  );
};
