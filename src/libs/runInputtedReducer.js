function runInputtedReducer(
  inputtedCode,
  currentState,
  actionType,
  actionPayload
) {
  let success = true;
  let nextState = null;
  function reducer() {}

  try {
    eval(inputtedCode + "\n reducer = petReducer");
    nextState = reducer(currentState, { type: actionType });
  } catch (err) {
    nextState = err;
    success = false;
  }

  return [nextState, success];
}

export default runInputtedReducer;
