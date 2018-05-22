import { Router, Request, Response } from 'express';
import { REST, User, Result } from 'studio-shared';
import * as Invites from 'model/Invites';
import * as Users from 'model/Users';
import { respond } from 'helpers/REST';

const router: Router = Router();
router.post('/login', (req: Request, res: Response) => {
  if (REST.isLoginRequest(req.body)) {
    Users.findUser(req.body.email).then((result) => {
      if (Result.isSuccess(result) && result.data.password === req.body.password) {
        respond<REST.LoginResponse>(res, { token: 'test', user: result.data });
      } else {
        res.status(403).send('Invalid username or password');
      }
    });
  } else {
    res.status(400).send('Bad request');
  }
});
router.post('/register', (req: Request, res: Response) => {
  if (REST.isRegisterRequest(req.body)) {
    Users.createUser(req.body).then((result) => {
      if (Result.isSuccess(result)) {
        respond<REST.LoginResponse>(res, { token: 'test', user: result.data });
      } else {
        res.status(403).send('Email is already in use');
      }
    });
  } else {
    res.status(400).send('Bad request');
  }
});
router.get('/invite', (req: Request, res: Response) => {
  Invites.createInvite().then((invite) => {
    res.json(invite);
  });
});
export { router };
