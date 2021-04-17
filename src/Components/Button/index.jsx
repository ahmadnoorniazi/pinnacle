import React from "react";

import "./index.css";

const Button = ({ text, handleClick, ...props }) => {
  return (
    <button {...props} className="button-global" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
