import express, { Request, Response, Express } from 'express';

const server: Express = express();

server.use(express.json());

server.get('/', (req: Request, res: Response) => {
  const { name } = req.query;

  return res.json({ message: `Hello ${name}!` });
});

export { server };
