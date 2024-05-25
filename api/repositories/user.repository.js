import prisma from "../prisma/prisma.js";

export const findUserByUsername = async (username) => {
  return await prisma.users.findUnique({
    where: {username}
  })
}
export const findUserByEmail = async (email) => {
  return await prisma.users.findUnique({
    where: {email}
  })
}
export const addUser = async (data) => {
  await prisma.users.create({
    data: data
  })
}
