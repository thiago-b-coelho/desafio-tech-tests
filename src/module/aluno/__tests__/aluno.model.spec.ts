import { knexServiceMock } from "../__mocks__/knexService.mock";
import { Aluno } from "../aluno.model";


describe('Aluno model Suite', () => {
    it('Should be able to GET students', async () => {
        const aluno = new Aluno(knexServiceMock);
        const response = await aluno.getAll();

        expect(response).toBeTruthy();
        expect(response.length).toBe(4);
    })
    it('Should be able to POST a student', async () => {
        const aluno = new Aluno(knexServiceMock);
        const response = await aluno.store({
            nome: "student 1",
            cpf: 123456789
        });

        expect(response).toBeTruthy();
        expect(response.length).toBe(1);
    })

    it('Should not be able to POST a student with invalid params', async () => {
        const aluno = new Aluno(knexServiceMock);
        const response = await aluno.store({
            nome: "student 1",
            cpf: 123458
        });
    })
})