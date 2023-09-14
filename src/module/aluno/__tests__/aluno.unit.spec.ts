import { knexServiceMock } from "../__mocks__/knexService.mock";
import { Aluno } from "../aluno.model";

describe("UNIT - Aluno model Suite", () => {
    describe("Truthy basic GET/POST student tests", () => {
        it("Should be able to GET students", async () => {
            const aluno = new Aluno(knexServiceMock);
            const response = await aluno.getAll();

            expect(response).toBeTruthy();
        });
        it("Should be able to POST a student", async () => {
            const aluno = new Aluno(knexServiceMock);
            const response = await aluno.store({
                nome: "student",
                cpf: "12345678911",
                idade: 12,
            });

            expect(response).toBeTruthy();
        });
    });

    describe("Student input data validation tests", () => {
        it("Should NOT be able to POST a student with name null or smaller than 2 letters", async () => {
            const aluno = new Aluno(knexServiceMock);
            await expect(async () => {
                await aluno
                    .store({
                        nome: "s",
                        cpf: "12345678911",
                        idade: 12,
                    })
            }).rejects.toThrow("Nome deve conter no mínimo 2 letras")
        });
        it("Should NOT be able to POST a student with numbers on the name", async () => {
            const aluno = new Aluno(knexServiceMock);
            await expect(async () => {
                await aluno
                    .store({
                        nome: "student 1",
                        cpf: "12345678911",
                        idade: 12,
                    })
            }).rejects.toThrow("Nome não deve conter números ou símbolos")
        });
        it("Should NOT be able to POST a student with letters or symbols on the CPF", async () => {
            const aluno = new Aluno(knexServiceMock);
            await expect(async () => {
                await aluno
                    .store({
                        nome: "student",
                        cpf: "1234567891a",
                        idade: 12,
                    })
            }).rejects.toThrow("CPF deve conter apenas números")
        });
        it("Should NOT be able to POST a student with CPF length different from 11", async () => {
            const aluno = new Aluno(knexServiceMock);
            await expect(async () => {
                await aluno
                    .store({
                        nome: "student",
                        cpf: "1234567891",
                        idade: 12,
                    })
            }).rejects.toThrow("CPF deve ter 11 digitos")
        });
        it("Should NOT be able to POST a student younger than 3 years old", async () => {
            const aluno = new Aluno(knexServiceMock);
            await expect(async () => {
                await aluno
                    .store({
                        nome: "student",
                        cpf: "12345678911",
                        idade: 2,
                    })
            }).rejects.toThrow("Aluno deve ter no mínimo 3 anos de idade")
        });
    });
});
