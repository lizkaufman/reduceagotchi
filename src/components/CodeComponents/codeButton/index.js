import React from "react";
import css from "./codeButton.module.css";

const CodeButton = ({ buttonText, handleClick }) => {
  return (
    <button onClick={handleClick} className={css.codeButton}>
      {buttonText}
    </button>
  );
};

export default CodeButton;
