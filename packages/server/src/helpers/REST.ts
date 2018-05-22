import { Response } from 'express';

function respond<T>(res: Response, data: T) {
  res.json(data);
}

export { respond };
