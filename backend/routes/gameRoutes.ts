
import { Router } from 'express';
import { handleMove } from '../controllers/gameController';

const router = Router();

router.post('/move', handleMove);

export default router;