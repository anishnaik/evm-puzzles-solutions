const { setup } = require("./setup");

// calldatasize should be 1. stack goes as follows
// 1 (this is calldatasize)
// 9 (codesize) | 1
// 8 (9 - 1)
// go to JUMPDEST

const puzzleCode = [
  '36',   // CALLDATASIZE
  '38',   // CODESIZE
  '03',   // SUB
  '56',   // JUMP
  'fdfd', // REVERT REVERT
  'fdfd', // REVERT REVERT
  '5b',   // JUMPDEST
].join('')

// Enter your solution here
const solution = {
  data: "0x00",
  value: 0
}

setup(puzzleCode, solution)
