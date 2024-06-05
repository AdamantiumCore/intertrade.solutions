import { MySqlContainer } from "@testcontainers/mysql";
import { execSync } from 'child_process';

export async function start() {
    const mySqlContainer = await new MySqlContainer().start();
    process.env.DATABASE_URL= mySqlContainer.getConnectionUri()
    execSync(`npx dotenv -v DATABASE_URL=${mySqlContainer.getConnectionUri()}?schema=public -- npx prisma db push`);
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
