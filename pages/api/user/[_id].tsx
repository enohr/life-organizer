import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../../utils/database';

import { Event } from '../../../model/Event';
import { User } from '../../../model/User';
import mongoose from 'mongoose';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'GET') {
    await connect();

    const { _id } = req.query;
    const user = await User.findById({ _id });
    return res.status(200).json({ user });
  }
};
