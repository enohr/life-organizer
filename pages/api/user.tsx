import { NextApiRequest, NextApiResponse } from 'next';
import { Event } from '../../model/Event';
import { User } from '../../model/User';
import connect from '../../utils/database';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await connect();

  if (req.method === 'POST') {
    const user = await User.create(req.body);
    res.status(200).json({ message: user });
  } else if (req.method === 'GET') {
    const users = await User.find();
    res.json({ users });
  }
};
