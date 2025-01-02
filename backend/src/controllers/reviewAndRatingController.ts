import { sendSuccess, sendError } from '../utils/responseHandle';
import {saveReviewAndRating} from '../services/reviewAndRatingService';

export const addReviewAndRating = async (req: any, res: any) => {
    try {
        const {
            orderId,
            review,
            ratingStars,
        } = req.body;

        // Validate that either retailerId or sellerId is present
        if (!orderId) {
            return sendError(res, 'orderId must be provided.');
        }

        // Add order logic
        const saveReview = await saveReviewAndRating({
            orderId,
            review,
            ratingStars,
        });

        // Success response
        sendSuccess(res, saveReview.data, saveReview.message);
    } catch (error) {
        console.error('Error Adding Review:', error);
        sendError(res, 'An error occurred while adding the Review.');
    }
};
