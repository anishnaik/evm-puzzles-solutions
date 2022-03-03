const { setup } = require("./setup");

// callvalue needs to be set to 6 so that 0004 + 6 can equal 10 which is where the JUMPDEST is
// 0004 + 06 = 10
const puzzleCode = [
  '34',     // CALLVALUE
  '610004', // PUSH2 0004
  '01',     // ADD
  '56',     // JUMP
  'fdfd',   // REVERT REVERT
  'fdfd',   // REVERT REVERT
  '5b',     // JUMPDEST
].join('')

// Enter your solution here
const solution = {
  data: "0x",
  value: 6
}

setup(puzzleCode, solution)
