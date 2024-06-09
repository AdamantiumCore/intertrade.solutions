import path from 'path';
import { readJsonFile } from '../utils/fileReader.js'
import { Spec } from './Spec.js';

export class AddressSpec extends Spec {
    constructor(path) {
        super(path)
    }

    async build() {
        const address = await readJsonFile(path.join(this.path, this.name))
        console.log('Address', address)

        return await this.prisma.addresses.create({
            data: {
                ...address
            }
        })
    }

    static fromPath(path) {
        return new AddressSpec(path);
    }
}