import express from 'express';
import cors from 'cors';

import { getAllStatus } from '../controllers/configController';

const app = express();
app.use(cors());

app.get('/getStatusList', getAllStatus);


export default app;