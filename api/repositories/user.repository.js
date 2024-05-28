import prisma from "../prisma/prisma.js";
export const findUserById = async (id) => {
  return prisma.users.findUnique({
    where: {id}
  })
}
export const findUserByUsername = async (username) => {
  const user = await prisma.users.findUnique({
    where: {username},
    select: {
      id: true
    }
  })
  return user?.id;
}
export const findUserByEmail = async (email) => {
  const user = await prisma.users.findUnique({
    where: {email},
    select: {
      id: true
    }
  })
  return user?.id;
}
//user crud Operations
export const getAllUsers = async () => {
  const users = await prisma.users.findMany();
  return users;
}
export const addUser = async (user) => {
  return prisma.users.create({
    data: user
  })
}
export const updateUser = async (user, id) => {
  return await prisma.users.update({
    where: { id },
    data: user
  })
}
export const deleteUser = async (userId) => {
  await prisma.users.delete({
    where: {id: userId},//can be changed to username because it is unique so it will work correctly
  })
}
//END user crud Operations