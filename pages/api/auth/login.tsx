import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../model/User';
import connect from '../../../utils/database';
import cookie from 'cookie';
import { compare } from 'bcrypt';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    await connect();
    const { password, email } = req.body;

    const user = await User.findOne({ email: email });

    const compared = await compare(password, user.password);
    if (!user || !compared) {
      return res.status(400).json({ error: 'Wrong credentials' });
    }
    const obj = {
      email: user.email,
      id: user._id,
    };

    const token = jwt.sign(obj, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('auth', token, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
      })
    );

    return res.json({ message: 'Welcome back' });
  } else {
    return res.status(405).json({ error: 'error' });
  }
};
