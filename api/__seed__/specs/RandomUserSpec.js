import {faker} from "@faker-js/faker";

export class RandomUserSpec {

  constructor(numberOfUsers = 1) {
    this.numberOfUsers = numberOfUsers;
  }

  static count(count) {
    return new RandomUserSpec(count);
  }

  usingConnection(prisma) {
    this.prisma = prisma;
    return this;
  }



  async build() {
    for (let i = 0; i < this.numberOfUsers; i++) {
      await this.prisma.users.create({
        data: {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          middle: faker.person.middleName(),
          phone: faker.helpers.fromRegExp(/(\d{3})(\d{3})(\d{4})/),
          email: faker.internet.email(),
          username: faker.internet.userName(),
          password: faker.internet.password(),
        }
      });
    }
  }
}