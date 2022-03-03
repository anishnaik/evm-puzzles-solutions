const { setup } = require("./setup");

// add zero to stack and then calldataload will add the first 32 bytes at the zero-th index to the stack. set the LSBs of the 32 bytes to 10 (0a) so that JUMP will jump to JUMPDEST
const puzzleCode = [
  '6000', // PUSH1 00
  '35',   // CALLDATALOAD
  '56',   // JUMP
  'fdfd', // REVERT REVERT
  'fdfd', // REVERT REVERT
  'fdfd', // REVERT REVERT
  '5b',   // JUMPDEST
].join('')

// Enter your solution here
const solution = {
  data: "0x000000000000000000000000000000000000000000000000000000000000000a",
  value: 0
}

setup(puzzleCode, solution)
