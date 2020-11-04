import { timeStamp } from 'console';
import mongoose, { Schema, Types } from 'mongoose';

const EventSchema = new Schema({
  day: { type: String, required: true },
  initial_hour: { type: Date, default: Date.now() },
  final_hour: { type: Date, default: Date.now() },
  title: { type: String, required: true },
  description: { type: String },
  user: {
    type: Types.ObjectId,
    ref: 'Events',
  },
});

export const Event =
  mongoose.models.Event || mongoose.model('Event', EventSchema);
