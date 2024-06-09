import request from 'supertest';
import { jsonMatcher } from '../__test__/assertions'

describe('User Controller Integration Tests', () => {

    it("should run like magic 3", async () => {
        await request(global.__APP__())
            .get('/api/v1/user')
            .expect(200)
            .expect(jsonMatcher({users: []}));
    });
})