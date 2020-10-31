import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await connect();
  res.status(200).json({ message: 'teste' });
};
