import request from 'supertest';
import { problemDetailsJson, violation, badRequestProblemJsonMatcher } from '../__test__/assertions'

describe('User Controller Integration Tests', () => {

    it("should run like magic", async () => {
        const response = await request(global.__APP__()).post('/api/v1/auth/register').send({
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
            .expect(badRequestProblemJsonMatcher({
                violations: [
                    violation('middleName', 'not.empty'),
                    violation('avatar', 'not.empty'),
                    violation('address', 'not.empty'),
                    violation('city', 'not.empty'),
                    violation('country', 'not.empty'),
                    violation('state_province', 'not.empty'),
                    violation('zipcode', 'not.empty'),
                    violation('phone', 'not.empty'),
                    violation('email', 'not.empty'),
                    violation('username', 'not.empty'),
                    violation('password', 'not.empty'),
                    violation('firstName', 'not.empty'),
                    violation('lastName', 'not.empty')
                ]
            }));
    });
});
