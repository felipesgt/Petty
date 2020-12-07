/* eslint-disable prettier/prettier */
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());

app.use(express.json());
mongoose.connect(
  'mongodb+srv://felipe:bHi7fC06bP8dwAw5@node.ls1al.mongodb.net/socialData?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
);

app.use(routes);
app.listen(3333);
