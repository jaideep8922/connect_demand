import express from 'express';
import cors from 'cors';

import { getAllStatus } from '../controllers/configController';

const app = express();
app.use(cors());

app.post('/create', getAllStatus);


export default app;