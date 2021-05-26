# Reduce-a-gotchi

An educational in-browser game where you learn how to use reducer functions by interacting with a cute virtual pet!

## Planning

- [Figma wireframe](https://www.figma.com/file/12LILRLSC8xLrwjfjqzenr/Reduce-a-gotchi?node-id=0%3A1)
- [Sprites in Piskel](https://www.piskelapp.com/user/5863391266078720/public)

### Plan

(🚧 = in progress, ✅ = done)

- ✅ Create basic virtual pet container (tamagotchi-like) with CSS, involving a screen and buttons
- ✅ Add a code editor for the user to input code
- 🚧 Create pixel art sprites to then show on the screen at different stages
- Outline the initial plan for the logic
  - What will the state hold?
  - What will the buttons do?
  - What feedback will the user get?
  - When will the user "win"?
- Plan out game flow
  - Work out how to break the game logic into each step of the functionality the user needs to add, each bite-sized bit of code that will connect up another button and/or cause something to happen on the screen
  - Write the copy/instructions the user will see
- Decide where the instructions will show on the page. Will they pop up over the page's contents? Will they appear as comments in the code input area?
- Work out how to connect the code the user inputs to the code that fuels the game itself.
- Get the game logic running (i.e. in the console)
- Incorporate the sprites visually on the screen at the right points
- Test
- Deploy dev version for feedback
- Collect and incorporate feedback
- Deploy prod version

## Dependencies

- [Ace code editor](https://github.com/securingsincity/react-ace)

## Development notes

### Code editor

First, I attempted to use [Monaco](https://www.npmjs.com/package/@monaco-editor/react) for the code editor. At first, it didn't show at all, and then I got it to display "Loading...", but it didn't load.

Next, I tried [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor) with [Prism](https://www.npmjs.com/package/prismjs) (syntax highlighting). I kept getting the error "highlight is not a function", even though I'm importing highlight from Prism.

However, I gave Ace a go after that, and it worked like a dream!
