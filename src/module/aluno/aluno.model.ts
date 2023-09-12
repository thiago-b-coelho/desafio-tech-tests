import knex from '../../service/knex';
import { Aluno, AlunoParams } from './aluno.d';

export const getAll = async (): Promise<Aluno[] | []> => {
  return knex('aluno').select();
};

export const store = async (params: AlunoParams) => {
  return knex('aluno').insert(params);
};
