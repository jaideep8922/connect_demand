import prisma from '../prisma/prismaClient';

export const saveReviewAndRating = async (reviewDetails: any) => {
    try {
        const {
            orderId,
            review,
            ratingStars,
        } = reviewDetails;

        // Save the notes with the appropriate combination
        const reviewSaveObj = await prisma.reviewAndRating.create({
            data: {
                orderId,
                review,
                ratingStars,
            },
        });

        return { message: 'Review added successfully', data: reviewSaveObj };
    } catch (error) {
        console.error('Error adding Review to the database:', error);
        throw new Error('Failed to add Review. Please try again.');
    }
};
