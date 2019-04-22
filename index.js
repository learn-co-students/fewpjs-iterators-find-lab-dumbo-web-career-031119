const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  return (arr.find(r => r.result === "W") ? arr.find(r => r.result === "W").year : arr.find(r => r.result === "W"));
}
