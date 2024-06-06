import request from 'supertest';

describe('User Controller Integration Tests', () => {
    
    let app;

    beforeAll(async () => {
        const module = await import('../app');
        app = module.default;
    }, 60000);

    it("should run like magic", async () => {
        const response = await request(app).post('/api/v1/auth/register').send({
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
        });
        console.log(response.body);
    });

    it("should run like magic 2", async () => {
        const response = await request(app).post('/api/v1/auth/register').send({
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
        });
        console.log(response.body);
    });
});
