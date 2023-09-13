import request from 'supertest';

describe('INT - Aluno Suite', () => {
    it('##GET /aluno', async () => {
        const response  = await request('http://localhost:8080')
            .get('/aluno')

        expect(response.status).toBe(200)
        expect(response.header['content-type']).toMatch('json')
    })
})