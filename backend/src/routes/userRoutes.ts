import express from 'express';
import cors from 'cors';

import { getAllUsers, onBoardUser,hello,getUserById } from '../controllers/userRegister';

const app = express();
app.use(cors());


app.get('/getAll', getAllUsers);
app.get('/getUserById/:id', getUserById);
app.post('/create', onBoardUser);
app.get('/hello', hello);

export default app;