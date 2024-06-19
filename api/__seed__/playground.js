import { UserSpec } from './specs/UserSpec.js'
import path from 'path';
import { db } from './utils/db.js'
import { AddressSpec } from './specs/AddressSpec.js';

console.log('Running playground ....')

async function main() {

    const prisma = db()
    await prisma.users.deleteMany()

    const usersPath = path.join(process.cwd(), 'data', 'users')
    const addressesPath = path.join(process.cwd(), 'data', 'addresses')

    await UserSpec
        .fromPath(usersPath)
        .fileName('john.doe.michael.json')
        .using(db())
        .usingAddressSpec(
            AddressSpec
                .fromPath(addressesPath)
                .fileName('address.1.json')
        )
        .build()

}

main()
    .then()
    .catch(error => {
        console.error(error)
    })