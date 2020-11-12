import connect from '../../utils/database';

import { Event } from '../../model/Event';
import { User } from '../../model/User';

import withIronSession from '../../lib/session';

export default withIronSession(
  async (req, res): Promise<void> => {
    if (req.method === 'POST') {
      await connect();

      if (req.session.get('user')) {
        return res.status(400).json({ message: 'Login first.' });
      }

      // In theory, this is not needed, cause in session we have the user. Just a double check.
      const { id } = req.session.get('user');
      const user = await User.findById({ _id: id });

      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
      const { day, initial_hour, final_hour, title } = req.body;

      const event = await Event.create({
        day: day,
        initialHour: initial_hour,
        finalHour: final_hour,
        title: title,
        user: id,
      });

      return res.status(200).json({ data: event });
    } else if (req.method === 'GET') {
      await connect();

      if (req.session.get('user')) {
        const { id } = req.session.get('user');
        const event = await Event.find({ user: id });
        return res.status(200).json({ event: event });
      } else {
        return res.status(400).json({ error: 'Internal error' });
      }
    }

    res.status(400).json({ data: 'Wrong method' });
  }
);
