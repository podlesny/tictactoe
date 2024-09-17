
import { CellValue, GameState } from '../models/gameState';

export const makeComputerMove = (gameState: GameState): GameState => {
  const emptyCells = gameState.board
    .map((value, index) => (value === null ? index : null))
    .filter((value) => value !== null) as number[];

  if (emptyCells.length === 0) {
    return { ...gameState, message: 'No moves left' };
  }

  const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];

  const newBoard = [...gameState.board];
  newBoard[randomIndex] = 'O';

  return {
    ...gameState,
    board: newBoard,
    currentPlayer: 'X',
  };
};


export const checkWinner = (board: Array<CellValue>): { winner: 'X' | 'O' | 'draw' | null; combination: number[] | null } => {
  const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Left diagonal
    [2, 4, 6], // Right diagonal
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], combination };
    }
  }

  if (board.every(cell => cell !== null)) {
    return { winner: 'draw', combination: null };
  }

  return { winner: null, combination: null };
};