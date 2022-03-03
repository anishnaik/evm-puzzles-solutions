const { setup } = require("./setup");

// set value to 3 -> value is duplicated then multiplied so 9 -> EQ will put 1 on stack. then  JUMPI will move to 0d b/c 1 is second on stack
const puzzleCode = [
  '34',     // CALLVALUE
  '80',     // DUP1
  '02',     // MUL
  '6009',   // PUSH1 09
  '14',     // EQ
  '600d',   // PUSH1 0d
  '57',     // JUMPI
  'fdfd',   // REVERT REVERT
  'fdfd',   // REVERT REVERT
  '5b',     // JUMPDEST
].join('')

// Enter your solution here
const solution = {
  data: "0x",
  value: 3
}

setup(puzzleCode, solution)
