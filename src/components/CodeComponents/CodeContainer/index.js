import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import css from "./codeContainer.module.css";

import CodeButton from "../CodeButton";

const CodeContainer = () => {
  const [petState, setPetState] = useState({ hunger: 100 });
  const [code, setCode] = useState(`
  function petReducer(state, action){
    switch (action.type) {
      case "FEED":
        return {...state, hunger: Math.max(state.hunger-10, 0)}
      default:
        return state;
    }
  }`);

  //When the user presses run code, whatever function is held in the code state runs
  //new Function creates a new scope; eval runs in current scope

  //keep track as state changes by storing up to date state in local storage
  //re-running reducer whenever that state in local storage changes
  //every time user runs an action, re-run reducer w/ the state in local storage, then re-save the resulting state in LS

  function handleChange(value) {
    setCode(value);
  }

  function handleClick() {
    evalPlayerCode(code);
  }

  function evalPlayerCode(playerCode) {
    function petReducer() {
      return "your reducer didn't work";
    }
    eval(playerCode);
    const nextState = petReducer(petState, { type: "FEED" });
    console.log(nextState);
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
        height={550}
      />
      <CodeButton handleClick={handleClick} />
    </div>
  );
};

export default CodeContainer;
