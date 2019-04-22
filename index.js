const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(whash) {
  let value = whash.find(s => s.result === 'W');
  return !!value ? value.year : undefined;
}