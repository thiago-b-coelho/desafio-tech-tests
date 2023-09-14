import { KnexService } from "../../service/knex";
import { Knex } from "knex";
import { AlunoT, AlunoParams } from "./aluno.d";

export class Aluno {
    private db: Knex;

    constructor(knexService: KnexService) {
        this.db = knexService.obterConexao();
    }

    getAll = async (): Promise<AlunoT[] | []> => {
        return this.db("aluno").select();
    };

    store = async (params: AlunoParams) => {
        if (params.nome.length < 2)
            throw new Error("Nome deve conter no mínimo 2 letras");
        else if (!/^[a-zA-Z]*$/.test(params.nome))
            throw new Error("Nome não deve conter números ou símbolos");

        if (params.cpf.length !== 11)
            throw new Error("CPF deve ter 11 digitos");
        else if (!/^[0-9]*$/.test(params.cpf))
            throw new Error("CPF deve conter apenas números");

        if (params.idade < 3)
          throw new Error("Aluno deve ter no mínimo 3 anos de idade")

        return this.db("aluno").insert(params);
    };
}
