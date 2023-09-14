import { alunosMock } from "../__mocks__/alunos.mock";

const knexMock = () => {
    return {
        select: jest.fn().mockReturnValueOnce(alunosMock),
        insert: jest.fn().mockReturnValueOnce([1]),
    };
};

export const knexServiceMock: any = {
    obterConexao: jest.fn(() => knexMock),
};
