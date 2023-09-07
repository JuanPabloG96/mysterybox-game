export const board = [
  ["", ""],
  ["", ""]
]
export const finalState = [
  [1, 2],
  [3, 4]
]
export const square = (num, index) => {
  return `<div class="square square-${index}">${num}</div>`
}