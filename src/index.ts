import express, { Express, Request, Response } from "express";
import notesRouter from "./routes/notes";

const app : Express = express();
const PORT = 5000;

app.use(express.json());
app.use(notesRouter);

app.get('/', (req : Request, res : Response) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
