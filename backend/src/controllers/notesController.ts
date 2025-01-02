import { sendSuccess, sendError } from '../utils/responseHandle';
import {createNotes} from '../services/notesService';

export const addNotes = async (req: any, res: any) => {
    try {
        const {
            retailerId,
            sellerId,
            notes,
        } = req.body;

        // Validate that either retailerId or sellerId is present
        if (!retailerId && !sellerId) {
            return sendError(res, 'Either retailerId or sellerId must be provided.');
        }

        // Add order logic
        const saveNotesData = await createNotes({
            retailerId,
            notes,
            sellerId,
        });

        // Success response
        sendSuccess(res, saveNotesData.data, saveNotesData.message);
    } catch (error) {
        console.error('Error Adding Notes:', error);
        sendError(res, 'An error occurred while adding the Notes.');
    }
};
