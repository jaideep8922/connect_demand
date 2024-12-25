import express from 'express';
import cors from 'cors';

import { onBoardUser,hello } from '../controllers/userRegister';

const app = express();
app.use(cors());


app.post('/create', onBoardUser);
app.get('/hello', hello);

export default app;