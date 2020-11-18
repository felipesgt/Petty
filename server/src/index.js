import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

app.use(express.json());
mongoose
  .connect(
    'mongodb+srv://felipe:bHi7fC06bP8dwAw5@node.ls1al.mongodb.net/socialData?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  )
  .then(console.log('sucess'));

app.use(routes);
app.listen(3000);
