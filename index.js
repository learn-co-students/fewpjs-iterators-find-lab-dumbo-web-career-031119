function superbowlWin(array) {
  let win = array.find( x => x.result === "W")
  return !!win ? win.year : undefined
}
