import express from 'express';
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'; 
import dotenv from "dotenv";
import cors from 'cors';
import TodoRouter from './routes/TodoRouter';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

const dbUrl = process.env.DB_URL;
const database = 'Todo';

mongoose.connect(`${dbUrl}/${database}`).then(() => {
  console.info("DB connected");
}).catch((err) => {
  console.error("Error connecting to DB:", err);
});

app.use("/api/todos", TodoRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
