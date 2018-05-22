import { Router, Request, Response } from 'express';
import { REST } from 'studio-shared';
import { router as users } from './users';

const router: Router = Router();
router.use('/users', users);
export { router };
