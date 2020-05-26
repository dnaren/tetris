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

  const allTetrominos = [
    ltetrominos, ztetrominos, otetrominos, itetrominos, ttetrominos
  ];

  let currentColumn = 4;

  function draw(tetromino, column) {
    tetromino.forEach(index => {
      squares[column + index].classList.add('tetromino');
    });
  }

  function undraw(tetromino, column) {
    tetromino.forEach(index => {
      squares[column + index].classList.remove('tetromino');
    });
  }

  function moveDown() {
    let randomRotation = Math.floor(Math.random() * 4);
    let randomTetrominoShape = Math.floor(Math.random() * allTetrominos.length);
    let currentTetromino = allTetrominos[randomTetrominoShape][randomRotation];

    draw(currentTetromino, currentColumn);
    setTimeout(() => {
      undraw(currentTetromino, currentColumn);
    }, 500);
  }

  moveDown();
});

