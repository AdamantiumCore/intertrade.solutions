import {db} from './utils/db.js'
import {RandomUserSpec} from "./specs/RandomUserSpec.js";

console.log('Running playground ....')

async function main() {
    const prisma = db()
    await prisma.users.deleteMany()

    await RandomUserSpec
      .count(10)
      .usingConnection(db())
      .build()
}

main()
    .then()
    .catch(error => {
        console.error(error)
    })