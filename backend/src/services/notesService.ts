import prisma from '../prisma/prismaClient';

export const createNotes = async (notesDetails: any) => {
    try {
        const {
            retailerId,
            notes,
            sellerId,
        } = notesDetails;

        // Validate input: Ensure either retailerId or sellerId is provided along with notes
        if (!notes || (!retailerId && !sellerId)) {
            throw new Error('Either retailerId or sellerId must be provided along with notes.');
        }

        // Save the notes with the appropriate combination
        const notesSaveObj = await prisma.notes.create({
            data: {
                retailerId: retailerId || null,
                sellerId: sellerId || null,
                notes,
            },
        });

        return { message: 'Notes added successfully', data: notesSaveObj };
    } catch (error) {
        console.error('Error adding Notes to the database:', error);
        throw new Error('Failed to add Notes. Please try again.');
    }
};
