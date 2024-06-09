import path from 'path';
import { readJsonFile } from '../utils/fileReader.js'
import { Spec } from './Spec.js';

export class UserSpec extends Spec {
    constructor(path) {
        super(path)
    }

    usingAddressSpec(addressSpec){
        this.addressSpec = addressSpec
        return this
    }

    async build() {
        this.addressSpec.using(this.prisma)
        const address = await this.addressSpec.build()
        const user = await readJsonFile(path.join(this.path, this.name))

        return await this.prisma.users.create({
            data: {
                ...user,
                addressID: address.id
            }
        })
    }

    static fromPath(path) {
        return new UserSpec(path);
    }
}