import { randomNumbers, checkEnd, renderBoard, updateBoard } from "./js/game.js";
import { board, finalState, square } from "./js/const.js";

const game = document.querySelector('.game');
const modal = document.querySelector('.modal')
const modalBtn = document.getElementById('modal-btn');
const boxes = document.querySelectorAll('.box');

let counter = 0;
function initializeState() {
  let moduleCounter = 1

  boxes.forEach(box => {
    box.addEventListener('click', () => {
      if (box.textContent == '') {
        box.textContent = moduleCounter;
        moduleCounter++
      }
    })
  })
}

function checkValid(boxes) {
  boxes.forEach(box => {
    if (box.textContent == '') return false
  })
  return true
}

modalBtn.addEventListener('click', () => {
  if (checkValid(boxes)) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {

      }
    }
  }
})

renderBoard(board, game, square)

/* updateBoard().then(result => {
  console.log("Numero de repeticiones: ", result)
}); */