import { getUsers, addUser,getUserById as fetchUserById } from '../services/userRegisterService';
import { sendSuccess, sendError } from '../utils/responseHandle';

export const getAllUsers = async (req: any, res: any) => {
  try {
    const users = await getUsers();
    sendSuccess(res, users, 'User Fetch Successfully')
  } catch (error) {
    console.error('Error fetching users:', error);
    sendError(res, 'error')
  }
};

export const getUserById = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    // Validation
    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'Invalid or missing user ID' });
    }

    // Fetch user by ID
    const user = await fetchUserById(Number(id));

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Send success response
    sendSuccess(res, user, 'User fetched successfully');
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    sendError(res, 'Error fetching user', error);
  }
};

export const onBoardUser = async (req: any, res: any) => {
  try {
    const { userType,
      businessName,
      businessOwner,
      phone,
      gstNumber,
      shopMarka,
      transport,
      pincode,
      city,
      state } = req.body;

       // Validation
    if (!userType || !['Retailer', 'Supplier'].includes(userType)) {
      return res.status(400).json({ error: 'Invalid userType. Must be "Retailer" or "Supplier".' });
    }
    if (!businessName || !phone || !gstNumber || !pincode || !city || !state ) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }
    
    const newUser = await addUser({ userType,
      businessName,
      businessOwner,
      phone,
      gstNumber,
      shopMarka,
      transport,
      pincode,
      city,
      state  });
    sendSuccess(res, newUser, 'User Onboarded Successfully')

  } catch (error) {
    console.error('Error onboarding user:', error);
    sendError(res, 'Error onboarding user:', error)
  }
};

export const hello = async (req: any, res: any) => {
  try {
    sendSuccess(res, null, 'Hello')
  } catch (error) {
    console.error('Error creating user:', error);
    sendError(res, 'Error creating user', error)
  }
};