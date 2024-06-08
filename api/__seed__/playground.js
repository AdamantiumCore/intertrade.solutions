import { UserSpec } from './specs/UserSpec.js'

console.log('Running playground ....')

async function main(){
    await UserSpec.fromString('John.Doe.Michael.json').build()
}

main()
    .then()
    .catch(error => {
        console.error(error)
    })