import { User } from '../../../model/User';
import connect from '../../../utils/database';
import { compare } from 'bcrypt';
import withSession from '../../../lib/session';

export default withSession(
  async (req, res): Promise<void> => {
    if (req.method === 'POST') {
      await connect();
      const { password, email } = req.body;

      const user = await User.findOne({ email: email });

      if (!user) {
        return res.status(401).json({
          error: 'Wrong credentials',
        });
      }

      const compared = await compare(password, user.password);

      if (!compared) {
        return res.status(400).json({ error: 'Wrong credentials' });
      }
      const obj = {
        email: user.email,
        id: user._id,
      };

      req.session.set('user', obj);
      await req.session.save();

      return res.json({ obj });
    } else {
      return res.status(405).json({ error: 'error' });
    }
  }
);
