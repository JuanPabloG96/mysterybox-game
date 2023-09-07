import { renderBoard, updateBoard } from "./js/game.js";
import { board, finalState, square } from "./js/const.js";

const game = document.querySelector('.game');
const modal = document.querySelector('.modal')
const modalBtn = document.getElementById('modal-btn');
const boxes = document.querySelectorAll('.box');
const startBtn = document.querySelector('.start-btn');

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
renderBoard(board, game, square)
initializeState();

modalBtn.addEventListener('click', () => {
  if (checkValid(boxes)) {
    boxes.forEach((box, index) => {
      const row = Math.floor(index / 2);
      const column = index % 2;
      board[row][column] = box.textContent;
    })
  }
  modal.classList.add('hidden')
  renderBoard(board, game, square)
})

startBtn.addEventListener('click', () => {
  updateBoard(counter, board, finalState, game, square).then(result => {

  })
})

/* updateBoard().then(result => {
  console.log("Numero de repeticiones: ", result)
}); */