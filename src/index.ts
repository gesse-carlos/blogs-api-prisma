import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

import { User, Category, Post, Login } from './routes';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/users', User);
app.use('/login', Login);
app.use('/category', Category);
app.use('/post', Post);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`running on ${PORT}`));