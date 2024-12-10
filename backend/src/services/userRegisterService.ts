import prisma from '../prisma/prismaClient';

export const getUsers = async () => {
  return await prisma.user.findMany();
};

export const addUser = async (userData:any) => {
  try {
    const newUser = await prisma.user.create({
      data: userData,
    });
    return newUser;
  } catch (error) {
    console.error('Error adding user to database:', error);
    throw new Error('Failed to add user');
  }
};

export const getUserById = async (id: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw new Error('Failed to fetch user');
  }
};
