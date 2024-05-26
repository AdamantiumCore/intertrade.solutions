import prisma from "../prisma/prisma.js";

export const findUserByUsername = async (username) => {
  return prisma.users.findUnique({
    where: {username},
    select: {
      id: true
    }
  })
}
export const findUserByEmail = async (email) => {
  return prisma.users.findUnique({
    where: {email},
    select: {
      id: true
    }
  })
}
export const addUser = async (user) => {
  return prisma.users.create({
    data: user
  })
}
