import prisma from "../prisma/prisma.js";

export const findUserByUsername = async (username) => {
  return prisma.users.findUnique({
    where: {username}
  })
}