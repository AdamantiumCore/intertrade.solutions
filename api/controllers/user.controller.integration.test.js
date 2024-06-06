import request from 'supertest';
import {problemDetailsJson} from '../__test__/assertions'

describe('User Controller Integration Tests', () => {

    it("should run like magic", async () => {
        const response = await request(global.__APP__()).post('/api/v1/auth/register').send({
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
        .expect(201);
    });

    it("should run like magic 2", async () => {
        const response = await request(global.__APP__()).post('/api/v1/auth/register').send({
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
        .expect(201);
    });

    
    it.only("should return problem details!", async () => {
        await request(global.__APP__()).post('/api/v1/auth/register').send({})
        .expect(400)
        .expect(problemDetailsJson())
        .then(res => {
            console.log(res.body)
            expect(res.body).toEqual({
                type: 'api/bad-request',
                title: 'Bad Request',
                detail: 'Request failed validations',
                status: 400,
                violations: [
                  { property: 'firstName', type: 'not.empty' },
                  { property: 'lastName', type: 'not.empty' },
                  { property: 'middleName', type: 'not.empty' },
                  { property: 'avatar', type: 'not.empty' },
                  { property: 'address', type: 'not.empty' },
                  { property: 'city', type: 'not.empty' },
                  { property: 'country', type: 'not.empty' },
                  { property: 'state_province', type: 'not.empty' },
                  { property: 'zipcode', type: 'not.empty' },
                  { property: 'phone', type: 'not.empty' },
                  { property: 'email', type: 'not.empty' },
                  { property: 'username', type: 'not.empty' },
                  { property: 'password', type: 'not.empty' }
                ]
              })
        });
    });
});
