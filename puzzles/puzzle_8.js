const { setup } = require("./setup");
// two jumps need to be made
// 26 code size
// CV < 26
// 26 | CV
// empty stack
// 0003 | CDS
// CDS | 0003
// 0a | CV | 1
// 10 + x = 25
// two jumps. first callvalue needs to be less than 26. if that's true then we jump to CALLDATASIZE. calldatasize needs to be of size 3 so the modulus + iszero sets to 1.
// then 0a (10) + x needs to equal 25 so that we reach the last JUMPDEST. so callvalue is 15.
const puzzleCode = [
  '38',     // CODESIZE
  '34',     // CALLVALUE
  '90',     // SWAP1
  '11',     // GT
  '6008',   // PUSH1 08
  '57',     // JUMPI
  'fd',     // REVERT
  '5b',     // JUMPDEST
  '36',     // CALLDATASIZE
  '610003', // PUSH2 03
  '90',     // SWAP1
  '06',     // MOD
  '15',     // ISZERO
  '34',     // CALLVALUE
  '600a',   // PUSH1 0a
  '01',     // ADD
  '57',     // JUMPI
  'fdfd',   // REVERT REVERT
  'fdfd',   // REVERT REVERT
  '5b',     // JUMPDEST
].join('')

// Enter your solution here
const solution = {
  data: "0x000000",
  value: 15
}

setup(puzzleCode, solution)
