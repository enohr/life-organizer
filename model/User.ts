import mongoose, { Types, Schema } from 'mongoose';

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  birth_date: { type: Date },
});

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
