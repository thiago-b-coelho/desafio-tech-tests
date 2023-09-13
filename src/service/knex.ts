import knex, { Knex } from 'knex';
const knexConfig = require('../config/knex');

export class KnexService {
  private static conn: Knex;

  obterConexao = () => {
    if (!KnexService.conn) {
      KnexService.conn = knex(knexConfig);
    }
    return KnexService.conn;
  }
}
