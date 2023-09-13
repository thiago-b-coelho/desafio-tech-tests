import express, { Request, Response } from 'express';
import alunoController from './aluno.controller';

const router = express.Router();

router.get('/', async (_, res: Response) => {
  const data = await alunoController.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req: Request, res: Response) => {
  const data = await alunoController.store(req.body);
  return res.status(200).json({ data });
});

export default router;