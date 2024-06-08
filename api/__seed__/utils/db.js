import { PrismaClient } from '@prisma/client';

export function db() {
  const url = process.env.DATABASE_URL
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url
      },
    },
    log: [
      {
        emit: 'event',
        level: 'query',
      },
      {
        emit: 'stdout',
        level: 'error',
      },
      {
        emit: 'stdout',
        level: 'info',
      },
      {
        emit: 'stdout',
        level: 'warn',
      },
    ],
  })

  prisma.$on('query', (e) => {
    console.log('Query: ' + e.query)
    console.log('Params: ' + e.params)
    console.log('Duration: ' + e.duration + 'ms')
  })

  return prisma;
}