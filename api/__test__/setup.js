import { start } from './test.container.js';
import { dbClient } from './db.client.js';

process.env.NODE_ENV = 'test';

export default async () => {
    global.__MYSQL_CONTAINER__ = await start();
    global.__CLIENT__ = dbClient();
};