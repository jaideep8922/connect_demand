import prisma from '../prisma/prismaClient';

// export const getUsers = async () => {
//   return await prisma.user.findMany();
// };

export const addUser = async (userData: any) => {
  try {

    const {
      userType,
      sellerId,
      businessName,
      businessOwner,
      phone,
      gstNumber,
      shopMarka,
      transport,
      pincode,
      city,
      state,
    } = userData;

    // Handle Retailer case
    if (userType === 'Retailer') {
      if (!sellerId) {
        throw new Error('supplierId is required to map Retailer to a Supplier.');
      }

      // Check if Supplier exists
      const supplierExists = await prisma.seller.findUnique({
        where: { id: sellerId },
      });

      if (!supplierExists) {
        throw new Error(`Supplier with ID ${sellerId} does not exist.`);
      }

      const retailer = await prisma.retailer.create({
        data: {
          sellerId,
          businessName,
          businessOwner,
          phone,
          gstNumber,
          shopMarka,
          transport,
          pincode,
          city,
          state,
        },
      });

      return { message: 'Retailer added successfully', data: retailer };
    }

    // Handle Supplier case
    if (userType === 'Supplier') {
      const supplier = await prisma.seller.create({
        data: {
          businessName,
          businessOwner,
          phone,
          gstNumber,
          shopMarka,
          transport,
          pincode,
          city,
          state,
        },
      });

      return { message: 'Supplier added successfully', data: supplier };
    }

  } catch (error) {
    console.error('Error adding user to database:', error);
    throw new Error('Failed to add user');
  }
};

export const fetchRetailerById = async (id: number) => {
  try {
    const user = await prisma.retailer.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw new Error('Failed to fetch user');
  }
};

export const fetchSellerById = async (id: number) => {
  try {
    const user = await prisma.seller.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw new Error('Failed to fetch user');
  }
};
