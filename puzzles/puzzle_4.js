const { setup } = require("./setup");

// need to XOR 13 with 1 to get 12. this will take us to JUMPDEST
const puzzleCode = [
  '6000', // PUSH1 00
  '35',   // CALLDATALOAD
  '38',   // CODESIZE
  '18',   // XOR
  '56',   // JUMP
  'fdfd', // REVERT REVERT
  'fdfd', // REVERT REVERT
  'fdfd', // REVERT REVERT
  '5b',   // JUMPDEST
].join('')

// Enter your solution here
const solution = {
  data: "0x0000000000000000000000000000000000000000000000000000000000000001",
  value: 0
}

setup(puzzleCode, solution)
