import express, { Request, Response } from "express";
import alunoFactory from "./aluno.factory";

const router = express.Router();

router.get("/", async (_, res: Response) => {
    const data = await alunoFactory.getAll();
    return res.status(200).json({ data });
});

router.post("/", async (req: Request, res: Response) => {
    if (!req.body.nome || !req.body.cpf || !req.body.idade) {
        return res.status(400).json({
            message: "Nome, idade e CPF são obrigatórios",
        });
    }
    let data: any;
    try {
        data = await alunoFactory.store(req.body);
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({
                message: err.message,
            });
        }
    }
    return res.status(201).json({ data });
});

export default router;
