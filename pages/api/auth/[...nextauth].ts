import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Credentials({
      id: 'login',
      name: 'aa',
      authorize: async (credentials) => {
        const {
          username,
          email,
          password,
          first_name,
          last_name,
          csrfToken,
        } = credentials;

        const body = {
          username,
          email,
          password,
          first_name,
          last_name,
        };
        const User = await axios.post(`http://localhost:3000/api/user`, body);
        return Promise.resolve(User);
      },
      credentials: {
        username: { label: 'Username', type: 'text ', placeholder: 'jsmith' },
        first_name: { label: 'First Name', type: 'text ' },
        last_name: { label: 'Last Name', type: 'text' },
        email: {
          label: 'Email',
          type: 'email ',
          placeholder: 'email@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
    }),
  ],
};
export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options);
