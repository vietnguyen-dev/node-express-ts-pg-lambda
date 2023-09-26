import express from 'express';
import { Request, Response, NextFunction, RequestHandler } from 'express';
import dotenv from 'dotenv'

const app = express();
dotenv.config()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express TypeScript!');
});

app.get('/sample', (req: Request, res: Response) => {
  const data: string[] = [
    'hello there', 'you slimeballs'
  ]
  res.status(200).send(data);
});


export default app