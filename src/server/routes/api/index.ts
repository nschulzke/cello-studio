import { Router } from 'express';
import { router as account } from 'app/account/routes';

const router: Router = Router();
router.use('/users', account);
export { router };
