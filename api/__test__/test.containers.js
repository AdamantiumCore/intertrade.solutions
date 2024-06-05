console.log('test.database.js')

import { MySqlContainer } from "@testcontainers/mysql";
import { execSync } from 'child_process';

export async function start() {
    const mySqlContainer = await new MySqlContainer().start();
    console.log('test.database.js URI:', mySqlContainer.getConnectionUri());
    process.env.DATABASE_URL= mySqlContainer.getConnectionUri()
    const output = execSync(`npx dotenv -v DATABASE_URL=${mySqlContainer.getConnectionUri()}?schema=public -- npx prisma db push`);
    console.log('test.database.js', output.toString())

    return mySqlContainer
}

export async function stop(container){
    try {
        if (container) {
            await container.stop();
        }
    } catch (error) {
        console.error("Error tearing down MySQL container and client:", error);
    }
}
