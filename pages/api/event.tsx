import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database';

import Event from '../../model/Event';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await connect();

  const event = await Event.create({
    day: 'Monday',
    title: 'Medic',
  });

  res.status(200).json({ data: event });
};
