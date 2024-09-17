
import express from 'express';
import cors from 'cors';
import gameRoutes from './routes/gameRoutes';
import dotenv from 'dotenv'

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', gameRoutes);

export default app;