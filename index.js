const testVar = {}

function testFunc() {
  return "hi"
}

// const superbowlWin = (arr) => {
//   let win = arr.find(obj => {
//     obj.result === "W"
// // )
//   }
//   return !!obj ? obj.year : undefined
// })
// }

const superbowlWin = (arr) => {
let result = arr.find(obj => obj.result === "W" )
// !!arr ? arr.year : undefined
return !!result ? result.year : undefined
}
