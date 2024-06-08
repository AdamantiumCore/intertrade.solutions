import path from 'path';
import { readJsonFile } from '../utils/fileReader.js'

export class UserSpec {
    constructor(path) {
        this.path = path;
    }

    fileName(name) {
        this.name = name
        return this
    }

    async build() {
        const user = await readJsonFile(path.join(this.path, this.name))
        console.log('User', user)
    }

    static fromPath(path) {
        return new UserSpec(path);
    }
}