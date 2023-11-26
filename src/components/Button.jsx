import React from "react";

const Button = ({ pathlink, text, children, title }) => {
  return (
    <a href={pathlink} target="_blank" title={title}>
      {children}
      {text}
    </a>
  );
};

export default Button;
