/**
 * Title          Snakes and Ladders: The Quickest Way Up
 * URL            https://www.hackerrank.com/challenges/the-quickest-way-up
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 08
 */

function quickestWayUp(ladders, snakes) {
  let board = [];
  board[100] = Infinity;
  let boardMove = [];
  const nLadder = ladders.length;
  const nSnake = snakes.length;

  const ladsEnd = ladders.map(x => x[1]).map(Number);
  const ladsBeg = ladders.map(x => x[0]).map(Number);
  const snakEnd = snakes.map(x => x[1]).map(Number);
  const snakBeg = snakes.map(x => x[0]).map(Number);

  // init Bmove
  for (let i = 1; i < 101; i++) {
    boardMove[i] = 0;
    board[i] = Infinity;
  }

  // ladders
  for (let i = 0; i < nLadder; i++) {
    boardMove[ladsBeg[i]] = ladsEnd[i];
  }

  // snakes
  for (let i = 0; i < nSnake; i++) {
    boardMove[snakBeg[i]] = snakEnd[i];
  }

  const tailEnd = boardMove
    .slice(93, 99)
    .map(function(x) {
      return x > 0 ? 1 : 0;
    })
    .reduce(function(a, b) {
      return a + b;
    });

  if (tailEnd === 6) {
    return -1;
  } else {
    for (let i = 1; i < 101; i++) {
      if (i < 8) {
        board[i] = 1;
      } else {
        board[i] = Math.min(board[i], 1 + Math.min(...board.slice(i - 6, i)));
      }

      if (boardMove[i] > 0) {
        if (board[i] < board[boardMove[i]]) {
          board[boardMove[i]] = board[i];

          if (boardMove[i] < i) {
            i = boardMove[i];
          }
        }
      }
    }

    return board[100];
  }
}
