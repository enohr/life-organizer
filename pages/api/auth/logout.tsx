import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    console.log(req.headers);
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('auth', '', {
        maxAge: -1,
        path: '/',
      })
    );
    return res.send({});
  }
};
