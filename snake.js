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