import { Router } from 'express';
import { buildRouter as buildUsers } from './users';

const buildRouter = ({ users, invites }) => {
  const router: Router = Router();
  router.use('/users', buildUsers(users, invites));
  return router;
}

export { buildRouter };
