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

  //TODO: keep track as state changes by storing up to date state in local storage
  //re-running reducer whenever that state in local storage changes
  //every time user runs an action, re-run reducer w/ the state in local storage, then re-save the resulting state in LS
  // TODO: Also add functionality to save code so far into local storage so a user can save where they got to and come back later!

  function handleChange(value) {
    setCode(value);
  }

  function handleClick() {
    //When the user presses run code, whatever function is held in the code state runs
    evalPlayerCode(code);
  }

  function evalPlayerCode(playerCode) {
    function reducer() {
      return "Your reducer didn't work. Check your code and try again!";
    }

    eval(playerCode + "\n reducer = petReducer");
    const nextState = reducer(petState, { type: "FEED" });
    setPetState(nextState);
    console.log({ petState });
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
