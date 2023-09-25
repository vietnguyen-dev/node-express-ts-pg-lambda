import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express TypeScript!');
});

app.get('/sample', (req, res) => {
  const data: string[] = [
    'hello there', 'you slimeballs'
  ]
  res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app