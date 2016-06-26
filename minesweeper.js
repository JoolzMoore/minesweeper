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
    // ADD EVENT LISTENERS HERE
function addListeners (elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', showCell)
    elements[i].addEventListener('contextmenu', markCell)
    addCellToBoard(elements[i])
  }
}
// each object corresponds to board
function addCellToBoard (elements) {
  var newCell = {
    row: getRow(elements),
    col: getCol(elements),
    isMine: elements.classList.contains("mine")
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

function getRow (elements) {
//*  var elementClass =  element.classList*/
  for (var i = 0; i < elements.classList.length; i++) {
    if (/row/.test(elements.classList.item(i))) {
            //  Extract element row number
      return parseInt(elements.classList.item(i).split('-')[i]);
      //  extracting number from string
    }
  }
}
function getCol (elements) {
//*  var elementClass =  element.classList*/
  for (var i = 0; i < elements.classList.length; i++) {
        if (/col/.test(elements.classList.item(i))) {
            //  Extract element col number
      return parseInt(elements.classList.item(i).split('-')[i]);
    }
  }
}




