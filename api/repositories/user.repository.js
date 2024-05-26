import prisma from "../prisma/prisma.js";

export const findUserByUsername = async (username) => {
  return prisma.users.findUnique({
    where: {username}
  })
}
export const findUserByEmail = async (email) => {
  return prisma.users.findUnique({
    where: {email}
  })
}
export const addUser = async (user) => {
  await prisma.users.create({
    data: user
  })
}
