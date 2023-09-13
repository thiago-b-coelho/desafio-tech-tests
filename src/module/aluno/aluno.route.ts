import express, { Request, Response } from 'express';
import alunoFactory from './aluno.factory';

const router = express.Router();

router.get('/', async (_, res: Response) => {
  const data = await alunoFactory.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req: Request, res: Response) => {
  if(!req.body.nome || !req.body.cpf){
    return res.status(400).json({
      message: "Nome e CPF são obrigatórios"
    })
  }
  const data = await alunoFactory.store(req.body);
  return res.status(201).json({ data });
});

export default router;