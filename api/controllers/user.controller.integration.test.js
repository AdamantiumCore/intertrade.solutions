const { MySqlContainer } = require("@testcontainers/mysql");
const request = require('supertest');
const { execSync } = require('child_process');

describe('User Controller Integration Tests', () => {
    
    let mySqlContainer;
    let app;

    beforeAll(async () => {
        mySqlContainer = await new MySqlContainer().start();
        console.log('The Connection URI:', mySqlContainer.getConnectionUri());
        process.env.DATABASE_URL= mySqlContainer.getConnectionUri()
        const output = execSync(`npx dotenv -v DATABASE_URL=${mySqlContainer.getConnectionUri()}?schema=public -- npx prisma db push`);
        console.log(output.toString())
        app = require('../app')
    }, 60000);

    afterAll(async () => {
        try {
            if (mySqlContainer) {
                await mySqlContainer.stop();
            }
        } catch (error) {
            console.error("Error tearing down MySQL container and client:", error);
        }
    });

    it("should run like magic", async () => {
        console.log('test DATABASE_URL', process.env.DATABASE_URL)
        const response = await request(app.app).post('/api/v1/auth/register').send({
            "username": "username",
            "password": "password",
            "firstName": "firstName",
            "lastName": "lastName",
            "middleName": "MiddleName",
            "avatar": "avatar.png/jpg",
            "address": "address",
            "city": "city",
            "country": "country",
            "state_province": "state_province",
            "zipcode": "zipcode",
            "phone": "phone",
            "email": "email"
        })
        console.log(response.body)
    })
})
