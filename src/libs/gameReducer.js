const petState = {
  name: "",
  isAlive: true,
  hunger: 0,
  mood: 100,
  health: 100,
  isDirty: false,
};

// ? I could have some logic in the background that ticks down things like hunger, flips isDirty to true, etc.... Maybe two reducers, one that the user inputs into, and one that's already in the app?
// ? Is there a way that I can incorporate something a little more challenging that requires a payload or some other more advanced reducer logic, other than name? A nested object, maybe?

// ! I need to outline the rules around health... Multiple things need to affect it at different rates!
