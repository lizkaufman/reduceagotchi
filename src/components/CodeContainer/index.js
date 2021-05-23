import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import css from "./codeContainer.module.css";

// function onChange(newValue) {
//   console.log("change", newValue);
// }

const CodeContainer = () => {
  const [code, setCode] = useState(`function helloWorld(){
        return "Hello world!";
    }`);

  function handleChange(value) {
    setCode(value);
    console.log({ code });
  }

  return (
    <div className={css.codeContainer}>
      <AceEditor
        mode="javascript"
        theme="monokai"
        onChange={handleChange}
        name="codeContainer"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default CodeContainer;
