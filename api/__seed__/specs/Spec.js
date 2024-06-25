export class Spec {
    constructor(path) {
        if (this.constructor === Spec) {
            throw new Error("Cannot instantiate an abstract class.");
        }
        this.path = path;
    }

    fileName(name) {
        this.name = name;
        return this;
    }

    usingConnection(prisma) {
        this.prisma = prisma;
        return this;
    }

    async build() {
        throw new Error("Abstract method 'processFile' must be implemented by subclass");
    }
}