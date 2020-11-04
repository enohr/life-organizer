import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database';

import { Event } from '../../model/Event';
import { User } from '../../model/User';
import mongoose from 'mongoose';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    await connect();

    const { user_id } = req.headers;

    console.log(req.headers);

    const user = await User.findById({ _id: user_id });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    const { day, initial_hour, final_hour, title } = req.body;

    const initialHour = new Date(initial_hour);
    const finalHour = new Date(final_hour);

    const event = await Event.create({
      day,
      initialHour,
      finalHour,
      title,
      user: user_id,
    });

    return res.status(200).json({ data: event });
  } else if (req.method === 'GET') {
    await connect();

    const { user_id } = req.headers;
    const event = await Event.find({ user: user_id });
    return res.status(200).json({ event: event });
  } else if (req.method === 'DELETE') {
    await connect();

    const { _id } = req.query;
    const deletedEvent = await Event.findByIdAndRemove({ _id });

    return res.status(200).json({ deleted: deletedEvent });
  }

  res.status(400).json({ data: 'Wrong method' });
};
