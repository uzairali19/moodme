import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import moodsRouter from './routes/moods.js';

const app = express();

app.use('./moods', moodsRouter);

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL =
  'mongodb+srv://uzairali:nAdB7wuwbqqslCFu@moodme-trail.wntop.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log('Running at:' + PORT)))
  .catch((error) => console.log(`${error} did not connect`));
