import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import css from "./codeContainer.module.css";
import { initialPetState, initialCodeState, tasks } from "../../../libs";
import runInputtedReducer from "../../../libs/runInputtedReducer";
import CodeButton from "../CodeButton";

const CodeContainer = () => {
  const [petState, setPetState] = useState(initialPetState);
  const [code, setCode] = useState(initialCodeState);
  const [taskStage, setTaskStage] = useState(0);

  //TODO: keep track as state changes by storing up to date state in local storage, re-running reducer whenever that state in local storage changes. Every time user runs an action, re-run reducer w/ the state in local storage, then re-save the resulting state in LS.
  // TODO: Also add functionality to save code so far into local storage so a user can save where they got to and come back later!

  function handleCodeChange(value) {
    setCode(value);
  }

  function handleRunCodeClick() {
    // NOTE: This logic works for now with running a single action type when clicking run code. This is going to need to change when the action types are tied to buttons!
    const [result, success] = runInputtedReducer(code, petState, "FEED");

    console.log({ result, success });

    if (success) {
      setPetState(result);
    } else {
      console.log(result);
    }
  }

  function handleNextStepClick() {
    //TODO: Add testing logic here to check user's code before proceeding to next stage!!
    //NOTE: Will probably need to lift this state up... Or roll it into a reducer that manages the "behind the scenes" bits of the app!
    setTaskStage(taskStage + 1);
  }

  return (
    <div className={css.codeContainer}>
      <AceEditor
        mode="javascript"
        theme="monokai"
        onChange={handleCodeChange}
        name="codeContainer"
        editorProps={{ $blockScrolling: true }}
        value={code}
        wrapEnabled={true}
        highlightActiveLine={true}
        height={550}
      />
      <section className={css.codeButtons}>
        <CodeButton
          buttonText="Run my code!"
          handleClick={handleRunCodeClick}
        />
        <CodeButton buttonText="Next step" handleClick={handleNextStepClick} />
      </section>
    </div>
  );
};

export default CodeContainer;
