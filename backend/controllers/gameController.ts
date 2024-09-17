import { Request, Response } from 'express';
import { checkWinner, makeComputerMove } from '../services/gameServices';
import { GameState } from '../models/gameState';

export const handleMove = (req: Request, res: Response) => {
  try {
    const gameState: GameState = req.body;

    const updatedGameState = makeComputerMove(gameState);

    const {winner, combination} = checkWinner(updatedGameState.board);
    if (winner) {
      return res.status(200).json({
        ...updatedGameState,
        winner,
        isGameOver: true,
        winningCombination: combination
      });
    }

    return res.status(200).json(updatedGameState);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};