import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import db from './models/db.js';
db();
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(cors());
app.use(express.json()); // parse JSON first
app.use(express.urlencoded({ extended: true })); // then parse form data

app.use('/api/v1/users', userRoutes); // finally mount routes

app.get('/', (req, res) => {
  res.send('Hello World');
});

export default app;
