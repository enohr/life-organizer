import { hash } from 'bcrypt';
import { User } from '../../model/User';
import connect from '../../utils/database';
import withSession from '../../lib/session';

export default withSession(
  async (req, res): Promise<void> => {
    if (req.method === 'POST') {
      await connect();

      const { password, email, first_name, last_name, birth_date } = req.body;
      const hashPass = await hash(password, 10);
      User.create({
        email,
        password: hashPass,
        first_name,
        last_name,
        birth_date,
      })
        .then(async (user) => {
          const obj = {
            email: user.email,
            id: user._id,
          };

          req.session.set('user', obj);
          await req.session.save();

          return res.status(200).json({ obj });
        })
        .catch(() => {
          return res.status(401).json({ error: 'E-mail already in use' });
        });
    } else if (req.method === 'GET') {
      await connect();

      const users = await User.find();
      return res.status(200).json({ users });
    }
  }
);
