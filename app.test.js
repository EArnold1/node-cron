const request = require('supertest');

const app = require('./server');

describe('Testing todos routes', () => {
    it('GET /todos', () => {
        return request(app)
            .get('/todos')
            .expect('Content-Type', /json/)
            // expect(res.status).toEqual(200);
            // expect(res.body.msg).toEqual('working');
            .then((res) => {
                expect(res.status).toEqual(200);
                expect(res.body.msg).toEqual(expect.any(String))
            });
    });

    it('GET /todo by id', () => {
        return request(app)
            .get('/todos/string')
            .then((res) => {
                expect(res.status).toEqual(200)
                expect(res.body.val).toEqual(expect.any(String))
            })
    });

    it('POST add title', () => {
        return request(app)
            .post('/todos')
            .send({ title: 'Tests' })
            .then((res) => {
                expect(res.status).toEqual(200);
                expect(res.body).toEqual(
                    expect.objectContaining(
                        {
                            title: expect.any(String)
                        }
                    )
                )
            })
    });

});
