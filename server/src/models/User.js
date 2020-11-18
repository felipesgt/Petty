import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordHash: String,
});
UserSchema.pre('save', async function () {
  if (this.password) this.passwordHash = await bcrypt.hash(this.password, 8);
  this.password = undefined; // tirar o valor do password para segurança
});

export default new model('User', UserSchema);
