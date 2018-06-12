import { Router } from 'express';
import { router as users } from 'app/users/routes';

const router: Router = Router();
router.use('/users', users);
export { router };
