import { UserSpec } from './specs/UserSpec.js'
import path from 'path';

console.log('Running playground ....')

async function main() {
    const fromPath = path.join(process.cwd(), 'data', 'users')
    await UserSpec
        .fromPath(fromPath)
        .fileName('John.Doe.Michael.json')
        .build()
}

main()
    .then()
    .catch(error => {
        console.error(error)
    })