/* defining the object. Call it board,  place it in global
scope  - outside  functions. It is an object with one property: cells with empty array.
*/
var board = {
  cells: []
}

document.addEventListener('DOMContentLoaded', startGame)

function startGame () {
  addListeners(document.getElementsByClassName('board')[0].children)
}
    // Add DOM element Event Listeners here
function addListeners (elements) {
  for (var i = 0; i < elements.length; i++) {
    //console.log('addlisteners'+i)
    elements[i].addEventListener('click', showCell)
    elements[i].addEventListener('contextmenu', markCell)
    addCellToBoard(elements[i])
  }
  for (var i = 0; i < board.cells.length; i++) {
    //console.log('board')
    board.cells[i].surroundingMines = countMines(board.cells[i])
    //console.log(board.cells[i].surroundingMines)
  }
}
// call the function for each cell or element of array
function countMines (cell) {
  //console.log('CM0'+cell.row+':'+cell.col)
  var surroundingMines = getSurroundingCells(cell.row, cell.col)
  //console.log('CM1')
  var totalMines = 0
  for (var i = 0; i < surroundingMines.length; i++) {
    if (surroundingMines[i].isMine === true) {
      totalMines++
    }
  }
  return totalMines
}

// each object corresponds to board
function addCellToBoard (elements) {
  var newCell = {
    row: getRow(elements),
    col: getCol(elements),
    isMine: elements.classList.contains('mine')
  }
  board.cells.push(newCell)
}

// CREATE FUNCTION showCell
function showCell (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('hidden')
}

// CREATE FUNCTION markCell - using find a digit? \d
function markCell (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('marked')
}

   /* Method to get info from cell and extract row-x and col-y class numbers*/
function getRow(element) {
   for (var i =0; i < element.classList.length; i++) {
  var extractNo = element.classList[i];
    if (extractNo.indexOf("row") > -1) {
  var number = extractNo.split("-");
//console.log (number[1]);
      return parseInt(number[1]);
    }
  }
}

function getCol(element) {
    for (var i=0; i < element.classList.length; i++) {
    var extractNo= element.classList[i];
    if (extractNo.indexOf("col") > -1) {
    var number = extractNo.split("-");
//console.log (number[1]);
    return parseInt(number[1]);
    }
  }
}
/




