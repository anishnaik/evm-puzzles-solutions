const { setup } = require("./setup");

// two jumps need to be made
// calldatasize needs to be of size 4 so that the LT puts a 1 on the stack. JUMPI will move us to CALLVALUE instruction
// callvalue * calldatasize must equal 8. since calldatasize is of length 4, then callvalue is 2.
const puzzleCode = [
  '36',     // CALLDATASIZE
  '6003',   // PUSH1 03
  '10',     // LT
  '6009',   // PUSH1 09
  '57',     // JUMPI
  'fdfd',   // REVERT REVERT
  '5b',     // JUMPDEST
  '34',     // CALLVALUE
  '36',     // CALLDATASIZE
  '02',     // MUL
  '6008',   // PUSH1 08
  '14',     // EQ
  '6014',   // PUSH1 14
  '57',     // JUMPI
  'fd',     // REVERT
  '5b',     // JUMPDEST
].join('')

// Enter your solution here
const solution = {
  data: "0x00000000",
  value: 2
}

setup(puzzleCode, solution)
