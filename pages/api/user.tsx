import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../model/User';
import connect from '../../utils/database';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await connect();

  if (req.method === 'POST') {
    const user = await User.create(req.body);
    res.status(200).json({ message: user });
  }
};
