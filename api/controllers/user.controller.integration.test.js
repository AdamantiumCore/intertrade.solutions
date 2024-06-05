import request from 'supertest';
import {start, stop} from '../__test__/test.container';
import { dbClient } from '../__test__/db.client';

describe('User Controller Integration Tests', () => {
    
    let app;
    let mySqlContainer;
    let client;

    beforeAll(async () => {
        mySqlContainer = await start()
        app = require('../app')
        client = dbClient() 
    }, 60000);

    afterAll(async () => {
        await stop(mySqlContainer)
    });

    beforeEach(async () => {
        await client.users.deleteMany()
    })

    it("should run like magic", async () => {
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

    it("should run like magic 2", async () => {
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
