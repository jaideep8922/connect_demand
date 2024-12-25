import { sendSuccess, sendError } from '../utils/responseHandle';
import { createProduct, getProductList , updateProduct} from '../services/productService';

export const addProduct = async (req: any, res: any) => {
    try {
        const {
            productName,
            averagePrice,
            goodPrice,
            highPrice,
            description,
            sellerId,
        } = req.body;

        if (!productName || !sellerId || !averagePrice || !goodPrice || !highPrice || !description) {
            return res.status(400).json({ error: 'Missing required fields.' });
        }

        // Add user logic
        const productData = await createProduct({
            productName,
            averagePrice,
            goodPrice,
            highPrice,
            description,
            sellerId,
        });

        // Success response
        sendSuccess(res, productData, "Product Added Successfully");
    } catch (error) {
        console.error('Error onboarding user:', error);
        sendError(res, 'Error onboarding user', error);
    }
};

export const getProductBySellerId = async (req: any, res: any) => {
    try {
        const { sellerId, } = req.body;

        if (!sellerId) {
            return res.status(400).json({ error: 'Seller Id Missing.' });
        }

        const productList = await getProductList({
            sellerId,
        });
        sendSuccess(res, productList, 'Product List Fetch Successfully')
    } catch (error) {
        console.error('Error fetching Product List:', error);
        sendError(res, 'Error fetching Product List:')
    }
};

export const updateProductData = async (req: any, res: any) => {
    try {
        const {
            id,
            productName,
            averagePrice,
            goodPrice,
            highPrice,
            description,
        } = req.body;

        if (!id ) {
            return res.status(400).json({ error: 'Product Id Missing.' });
        }

        const updatedData = await updateProduct({
            id,
            productName,
            averagePrice,
            goodPrice,
            highPrice,
            description,
        });
        sendSuccess(res, updatedData, 'Product List Fetch Successfully')
    } catch (error) {
        console.error('Error fetching Product List:', error);
        sendError(res, 'Error fetching Product List:')
    }
};