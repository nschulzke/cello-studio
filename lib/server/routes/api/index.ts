import { Router } from 'express';
import { router as users } from './users';

const router: Router = Router();
router.use('/users', users);
export { router };
