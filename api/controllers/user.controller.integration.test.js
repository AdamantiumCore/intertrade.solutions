const { MySqlContainer } = require("@testcontainers/mysql");
const request = require('supertest');
const { execSync } = require('child_process');

describe('User Controller Integration Tests', () => {
    
    let mySqlContainer;

    beforeAll(async () => {
        mySqlContainer = await new MySqlContainer().start();
        console.log('The Connection URI:', mySqlContainer.getConnectionUri());
        process.env.DATABASE_URL= mySqlContainer.getConnectionUri()
        const output = execSync(`npx dotenv -v DATABASE_URL=${mySqlContainer.getConnectionUri()}?schema=public -- npx prisma db push`);
        console.log(output.toString())
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
    
    })
})
