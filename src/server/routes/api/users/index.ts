import { Router, Request, Response } from 'express';
import { RegisterRequest, LoginRequest, UpdateProfileRequest, UpdateProfileResponse, LoginResponse } from 'server/types';
import { respond } from 'server/helpers/REST';

const buildRouter = (users, invites) => {
  const router: Router = Router();

  router.post('/login', (req: Request, res: Response) => {
    if (LoginRequest.is(req.body)) {
      let result = users.login(req.body);
      if (result.success) {
        respond<LoginResponse>(res, { ...result.data, profile: users.getProfile(req.body.email).data });
      } else {
        res.status(403).send(result.data);
      }
    } else {
      res.status(400).send('Bad request');
    }
  });

  router.post('/register', (req: Request, res: Response) => {
    if (RegisterRequest.is(req.body)) {
      let result = users.register(req.body);
      if (result.success) {
        let login = result.login(req.body);
        if (login.success) {
          respond<LoginResponse>(res, { ...result.data, profile: users.getProfile(req.body.email).data });
        } else {
          res.status(500).send('An error occurred');
        }
      } else {
        res.status(403).send(result.data);
      }
    } else {
      res.status(400).send('Bad request');
    }
  });

  router.post('/update-profile', (req: Request, res: Response) => {
    if (UpdateProfileRequest.is(req.body)) {
      let result = users.updateProfile(req.body.email, req.body.profile)
      if (result.success) {
        respond<UpdateProfileResponse>(res, { profile: result.data });
      } else {
        res.status(400).send(result.data);
      }
    } else {
      res.status(400).send('Bad request');
    }
  });

  router.get('/invite', (req: Request, res: Response) => {
    res.json(invites.create());
  });

  return router;
}

export { buildRouter };
