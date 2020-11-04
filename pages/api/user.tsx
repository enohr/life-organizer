import { NextApiRequest, NextApiResponse } from 'next';
import { Event } from '../../model/Event';
import { User } from '../../model/User';
import connect from '../../utils/database';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    await connect();

    const user = await User.create(req.body);
    return res.status(200).json({ message: user });
  } else if (req.method === 'GET' && req.query._id) {
    await connect();

    const { _id } = req.query;
    const user = await User.findById({ _id });
    return res.status(200).json({ user });
  } else if (req.method === 'GET') {
    await connect();

    const users = await User.find();
    return res.status(200).json({ users });
  }
};
