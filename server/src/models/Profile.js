import mongoose, { Schema, model } from 'mongoose';

const ProfileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
});
export default new model('Profile', ProfileSchema);
