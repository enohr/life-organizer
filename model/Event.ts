import { timeStamp } from 'console';
import mongoose, { Schema } from 'mongoose';

const EventSchema = new Schema({
  day: { type: String, required: true },
  initial_hour: { type: Date, default: Date.now() },
  final_hour: { type: Date, default: Date.now() },
  title: { type: String, required: true },
  description: { type: String },
});

export default mongoose.model('Event', EventSchema);
