// const petState = {
//   name: "",
//   isAlive: true,
//   hunger: 0,
//   mood: 100,
//   health: 100,
//   isDirty: false,
// };

// Gameplay actions:
// - Naming
// - Feeding (kibble)
// - Feeding (treat)
// - Cleaning

// Brainstorms:
// ? I could have some logic in the background that ticks down things like hunger, flips isDirty to true, etc.... Maybe two reducers, one that the user inputs into, and one that's already in the app?
// ? Is there a way that I can incorporate something a little more challenging that requires a payload or some other more advanced reducer logic, other than name? A nested object, maybe?
// ? So that the user can concentrate on the code, one of the buttons on the game view can pause the game so they don't have to worry about taking care of their pet and coding at the same time...

// ! I need to outline the rules around health... Multiple things need to affect it at different rates (positive and negative)!

/* 
Notes (Nick session):
- Can have the user define a variable in line with certain conditions; then my code looks for that and tests if it meets the conditions and throw an error if not 
- I write tests for their reducers and make sure they update the states in the way that I've defined (I write unit tests for their code!)

- Eval function to evaluate arbitrary code in a string 
- Prototyping (new instance of Function and passing the user's function in as a string; can then test!)

- Array of objects: initial code state, task conditions

- Storing in local storage (user's code, game state)

- Have their code as a single string that's added after every level 
*/
