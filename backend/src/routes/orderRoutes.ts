import express from 'express';
import cors from 'cors';

import { createOrder, getOrderStatusHistory, getOrderHistoryByRetailerId,updateOrderStatus } from '../controllers/orderController';

const app = express();
app.use(cors());


app.post('/createOrder', createOrder);
app.post('/getOrderStatusHistory', getOrderStatusHistory);
app.post('/getOrderHistoryByRetailerId', getOrderHistoryByRetailerId);
app.put('/updateOrderStatus', updateOrderStatus);

export default app;