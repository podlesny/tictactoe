export type CellValue = 'X' | 'O' | null;

export interface GameState {
  board: CellValue[];
  isGameOver: boolean;
  winner: 'X' | 'O' | 'draw' | null;
  currentPlayer: 'X' | 'O';
  winningCombination: number[] | null
}