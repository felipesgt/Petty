/* eslint-disable new-cap */
import { Schema, model } from 'mongoose';

const ScheduleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
});

export default new model('User', ScheduleSchema);
