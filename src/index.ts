import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`running on ${PORT}`));