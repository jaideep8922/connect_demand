import express from 'express';
import cors from 'cors';

import { addProduct, getProductBySellerId, updateProductData } from '../controllers/productController';

const app = express();
app.use(cors());


app.post('/addProduct', addProduct);
app.post('/getProductList', getProductBySellerId);
app.put('/updateProduct', updateProductData);

export default app;