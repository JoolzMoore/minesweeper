document.addEventListener('DOMContentLoaded', startGame)

function startGame () {
  addListeners(document.getElementsByClassName('board')[0].children)
}
    // ADD EVENT LISTENERS HERE
function addListeners (elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', showCell)
  }
}

// CREATE FUNCTION showCell
function showCell (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('hidden')
}
