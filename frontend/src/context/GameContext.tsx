import React, { createContext, useReducer, ReactNode } from 'react';
import { GameState, CellValue } from '../types/gameTypes';

type Action =
  | { type: 'MAKE_MOVE'; payload: { index: number; value: CellValue } }
  | { type: 'UPDATE_GAME_STATE'; payload: GameState }
  | { type: 'RESET_GAME' };

const gameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case 'MAKE_MOVE': {
      const newBoard = [...state.board];
      newBoard[action.payload.index] = action.payload.value;
      return {
        ...state,
        board: newBoard,
        currentPlayer: 'O',
      };
    }
    case 'UPDATE_GAME_STATE': {
      return {
        ...action.payload,
      };
    }
    case 'RESET_GAME': {
      return {
        board: Array(9).fill(null),
        isGameOver: false,
        winner: null,
        currentPlayer: 'X',
        winningCombination: null
      };
    }
    default:
      return state;
  }
};

// Context to provide state and dispatch to components
const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, {
    board: Array(9).fill(null),
    isGameOver: false,
    winner: null,
    currentPlayer: 'X',
    winningCombination: null
  });

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = React.useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
