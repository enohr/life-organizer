import { hash } from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../model/User';
import connect from '../../utils/database';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    await connect();

    const {
      password,
      email,
      username,
      first_name,
      last_name,
      birth_date,
    } = req.body;
    const hashPass = await hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashPass,
      first_name,
      last_name,
      birth_date,
    });
    if (user) {
      return res.status(200).json({ message: user });
    } else {
      return res.status(401).json({ error: 'E-mail already in use' });
    }
  } else if (req.method === 'GET') {
    await connect();

    const users = await User.find();
    return res.status(200).json({ users });
  }
};
