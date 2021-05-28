# Reduce-a-gotchi

An educational in-browser game where you learn how to use reducer functions by interacting with a cute virtual pet!

## Planning

- [Figma wireframe](https://www.figma.com/file/12LILRLSC8xLrwjfjqzenr/Reduce-a-gotchi?node-id=0%3A1)
- [Sprites in Piskel](https://www.piskelapp.com/user/5863391266078720/public)

### Plan

(🚧 = in progress, ✅ = done)

- ✅ Create basic virtual pet container (tamagotchi-like) with CSS, involving a screen and buttons.
- ✅ Add a code editor for the user to input code.
- 🚧 Create pixel art sprites to then show on the screen at different stages.
- Outline the initial plan for the logic.
  - What will the state hold?
  - What will the buttons do?
  - What feedback will the user get?
  - When will the user "win"?
- Plan out game flow.
  - Work out how to break the game logic into each step of the functionality the user needs to add, each bite-sized bit of code that will connect up another button and/or cause something to happen on the screen.
  - Write the copy/instructions the user will see.
- Decide where the instructions will show on the pag. Will they pop up over the page's contents? Will they appear as comments in the code input area?
- Work out how to connect the code the user inputs to the code that fuels the game itself.
- Get the game logic running at a basic level so the code works (i.e. in the console).
- Incorporate the sprites visually on the screen at the right points.
- Test!
- Deploy dev version for feedback.
- Collect and incorporate feedback.
- Deploy prod version.

## Dependencies

- [Ace code editor](https://github.com/securingsincity/react-ace)

## Development notes

As much as I aim for the outcome of this to be something educational and useful, this project is also meant to be a learning experience for me. In this section, I'll keep a diary of learning points and snags I hit along the way (and how I extricate myself from them!) as I develop.

### Code editor

First, I attempted to use [Monaco](https://www.npmjs.com/package/@monaco-editor/react) for the code editor. At first, it didn't show at all, and then I got it to display "Loading...", but it didn't load.

Next, I tried [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor) with [Prism](https://www.npmjs.com/package/prismjs) (syntax highlighting). I kept getting the error "highlight is not a function", even though I'm importing highlight from Prism.

However, I gave Ace a go after that, and it worked like a dream!

### Hooking up the code editor's code to the app

Shout out to Nick Goodall (@nbgoodall) for his guidance as we paired on getting the code editor to start to talk to the app's code! We experimented with both handing the user's input to `new Function()` and using `eval()`. Evaluating worked because it runs in the current scope where the app's code is (whereas when we handed it to `new Function()`, it created a new scope). This means that if the state lives within the app and the user inputs the reducer function that acts on that state, these can play nicely together within the same scope.

<!--

! NOTE: Notes from gameReducer file:

const petState = {
  name: "",
  isAlive: true,
  hunger: 0,
  mood: 100,
  health: 100,
  isDirty: false,
};

 Gameplay actions:
- Naming
- Feeding (kibble)
- Feeding (treat)
- Cleaning

Brainstorms:
? I could have some logic in the background that ticks down things like hunger, flips isDirty to true, etc.... Maybe two reducers, one that the user inputs into, and one that's already in the app?
? Is there a way that I can incorporate something a little more challenging that requires a payload or some other more advanced reducer logic, other than name? A nested object, maybe?
? So that the user can concentrate on the code, one of the buttons on the game view can pause the game so they don't have to worry about taking care of their pet and coding at the same time...

! I need to outline the rules around health... Multiple things need to affect it at different rates (positive and negative)!

/*
! NOTE: (Nick session):
- Can have the user define a variable in line with certain conditions; then my code looks for that and tests if it meets the conditions and throw an error if not
- I write tests for their reducers and make sure they update the states in the way that I've defined (I write unit tests for their code!)

- Eval function to evaluate arbitrary code in a string
- Prototyping (new instance of Function and passing the user's function in as a string; can then test!)

- Array of objects: initial code state, task conditions

- Storing in local storage (user's code, game state)

- Have their code as a single string that's added after every level
*/

 -->
