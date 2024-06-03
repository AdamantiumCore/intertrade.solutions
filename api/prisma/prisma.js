import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

console.log('prisma.js DATABASE_URL', process.env.DATABASE_URL)
export default prisma;