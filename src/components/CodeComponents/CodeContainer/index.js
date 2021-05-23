import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import css from "./codeContainer.module.css";

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
        value={code}
        wrapEnabled={true}
        highlightActiveLine={true}
        height={600}
      />
    </div>
  );
};

export default CodeContainer;
