
import axios from 'axios';
import { CellValue } from '../types/gameTypes';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const gameApi = {
  makeComputerMove: async (currentBoard: CellValue[]) => {
    const response = await axios.post(`${BACKEND_URL}/move`, { board: currentBoard });
    return response.data; // Assuming response contains { computerMoveIndex: number }
  },
};