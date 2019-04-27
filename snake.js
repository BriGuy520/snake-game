
const NORTH = { x: 0, y: -1 };
const SOUTH = { x: 0, y: 1 };
const EAST = { x: 1, y: 0};
const WEST = { x: -1, y: 0 };

// Point operations 
const pointEq = p1 => p2 => p1.x == p2.x && p1.y == p2.y;

// Boolean
const willEat = state => pointEq(nextHead(state))(state.apple);
const willCrash = state => state.snake.find(pointEq(nextHead(state)));
const validMove = move => state => state.moves[0].x + move.x != 0 || state.moves[0].y + move.y != 0;

// Next values based on state 

const rndPos = table => ({
  x: rnd(0)(table.cols - 1),
  y: rnd(0)(table.rows - 1)
});

const initialState = () => ({
  cols: 20,
  rows: 14,
  moves: [EAST],
  snake: [],
  apple: { x: 16, y: 2 }
});

const next = spec({
  rows: prop('rows'),
  cols: prop('cols'),
  moves: nextMoves,
  snake: nextSnake,
  apple: nextApple 
});

const enqueue = (state, move) => validMove(move)(state)
  ? merge(state)({ moves: state.moves.concat([move]) })
  : state

  module.exports = { EAST, NORTH, SOUTH, WEST, initialState}