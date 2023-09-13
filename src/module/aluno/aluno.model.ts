import { KnexService } from '../../service/knex';
import { Knex } from 'knex';
import { AlunoT, AlunoParams } from './aluno.d';

export class Aluno {
  private db: Knex

  constructor(knexService: KnexService){
    this.db = knexService.obterConexao()
  }

  getAll = async (): Promise<AlunoT[] | []> => {
    return this.db('aluno').select();
  }

  store = async (params: AlunoParams) => {
    return this.db('aluno').insert(params)
  }
}
