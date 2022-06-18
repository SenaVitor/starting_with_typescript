import { Request, Response } from 'express';

const users = [
    {name: "Vitor", email: "vitor@gmail.com"},
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    }
};