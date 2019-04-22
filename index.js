const testVar = {}

function testFunc() {
    return "hi"
}

const superbowlWin = (arr) => {
    let win = arr.find(c => c.result === "W")
    return !!win ? win.year : undefined
}