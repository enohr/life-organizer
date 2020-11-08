import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../../utils/database';

import { Event } from '../../../model/Event';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'DELETE') {
    await connect();

    console.log(req.query);

    const { _id } = req.query;
    const deletedEvent = await Event.findByIdAndRemove({ _id });

    return res.status(200).json({ deleted: deletedEvent });
  }
};
