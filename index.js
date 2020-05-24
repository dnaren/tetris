document.addEventListener('DOMContentLoaded', () => {
  const width = 10;
  const grid = document.querySelector('.grid');
  const squares = Array.from(document.querySelectorAll('.grid div'));
  const score = document.querySelector('#score');
  const btnStart = document.querySelector('#btnStart');

  const ltetrominos = [
    [0, 1, width, width * 2],
    [0, 1, 2, width + 2],
    [1, width + 1, width * 2, width * 2 + 1],
    [0, width, width + 1, width + 2]
  ];

  const ztetrominos = [
    [1, 2, width, width + 1],
    [0, width, width + 1, width * 2 + 1],
    [1, 2, width, width + 1],
    [0, width, width + 1, width * 2 + 1]
  ];

  const otetrominos = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ];

  const itetrominos = [
    [0, width, width * 2, width * 3],
    [0, 1, 2, 3],
    [0, width, width * 2, width * 3],
    [0, 1, 2, 3]
  ];

  const ttetrominos = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [0, 1, 2, width + 1],
    [1, width, width + 1, width * 2 + 1],
  ];

  let curPosition = 4;
  paintTetrominos(curPosition, ttetrominos, squares)
});

function paintTetrominos(curPosition, tetromino, squares) {
  tetromino[0].forEach(element => {
    squares[curPosition + element].classList.add('tetromino');
  });
}
