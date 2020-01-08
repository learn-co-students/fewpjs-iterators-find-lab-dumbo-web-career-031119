const testVar = {}

function testFunc() {
  return "hi"
}


superbowlWin = (arr) =>{
  const answer = arr.find(e => e.result == "W")
   if(answer == undefined ){
     return undefined 
   }
  else return answer.year
}