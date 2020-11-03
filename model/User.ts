import mongoose, { Types, Schema } from 'mongoose';

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  birth_date: { type: Date },
  events: [
    {
      type: Types.ObjectId,
      ref: 'Events',
    },
  ],
});

export default mongoose.model('User', UserSchema);
