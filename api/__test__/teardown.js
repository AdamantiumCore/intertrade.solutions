import {stop} from './test.container.js';

export default async () => {
    await stop(global.__MYSQL_CONTAINER__);
};