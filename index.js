const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
function superbowlWin(array) {
let winningYear
const winningObject = array.find(element => element.result === "W");
if (winningObject) {
winningYear = winningObject.year;
}
return winningYear;
}

console.log(superbowlWin(record));
