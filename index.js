const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (array) => {
  let result = array.find(s => s.result === "W");
   if (result !== undefined) {
     return result.year;
   }
}
