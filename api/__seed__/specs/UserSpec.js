import path from 'path';
import { readJsonFile } from '../utils/fileReader.js'

export class UserSpec {
    constructor(fileName) {
        this.fileName = fileName;
    }

    
    async build() {
        const fileLocation = path.join(process.cwd(), 'data', 'users', this.fileName)
        const user = await readJsonFile(fileLocation)

        console.log('User', user)
    }

    static fromString(fileName) {
        return new UserSpec(fileName);
    }
}