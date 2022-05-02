import express, { Express, Request, Response } from "express";
import notesRouter from "./routes/notes";
import { sequelize } from "./services/connectToDatabase";

const app : Express = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(notesRouter);

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
