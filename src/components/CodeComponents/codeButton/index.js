import React from "react";
import css from "./codeButton.module.css";

const CodeButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={css.codeButton}>
      Run my code!
    </button>
  );
};

export default CodeButton;
