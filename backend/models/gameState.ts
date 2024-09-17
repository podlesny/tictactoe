
export type CellValue = 'X' | 'O' | null;

export interface GameState {
  board: CellValue[];
  currentPlayer: 'X' | 'O'; 
  message?: string
  isGameOver: boolean;
  winningCombination?: number[]
  winner: 'X' | 'O' | 'draw' | null;
}