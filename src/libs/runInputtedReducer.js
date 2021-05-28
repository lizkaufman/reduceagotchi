function runInputtedReducer(inputtedCode, currentState, type, payload) {
  let success = true;
  let nextState = null;
  function reducer() {}

  try {
    eval(inputtedCode + "\n reducer = petReducer");
    nextState = reducer(currentState, { type: type, payload: payload });
  } catch (err) {
    nextState = err;
    success = false;
  }

  return [nextState, success];
}

export default runInputtedReducer;
