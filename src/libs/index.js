export const initialPetState = {
  name: "",
  isAlive: true,
  hunger: 100,
  mood: 100,
  health: 100,
  isDirty: false,
};

export const initialCodeState = `function petReducer(state, action){
  switch (action.type) {
    case "FEED":
      return {...state, hunger: Math.max(state.hunger-10, 0)}
    default:
      return state;
  }
}`;

export const tasks = [
  {
    instructions: `1: intros game and asks user to set up reducer function that takes in state and action`,
    expected: `function petReducer(state,action){}`,
  },
  {
    instructions: `2: set up switch statement with default`,
    expected: `function petReducer(state,action){switch(action.type){
       default:
           return state;
    }}`,
  },
  {
    instructions: ``,
    expected: `function petReducer(state,action){switch(action.type){
       
    }}`,
  },
];
