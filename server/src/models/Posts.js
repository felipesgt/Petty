import mongoose, { Schema, model } from 'mongoose';

const PostSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
});
export default new model('Post', PostSchema);
