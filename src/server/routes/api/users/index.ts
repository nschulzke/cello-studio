import { Router, Request, Response } from 'express';
import { RegisterRequest, LoginRequest, UpdateProfileRequest, UpdateProfileResponse } from 'server/types';
import { respond } from 'server/helpers/REST';
import * as moment from 'moment';
import { permissionsCheck } from '../../../helpers/permissionsCheck';
import { Permissions } from 'domain/types';

const buildRouter = (users, invites) => {
  const router: Router = Router();
  let checkPermissions = permissionsCheck(users)

  router.post('/login', (req: Request, res: Response) => {
    if (LoginRequest.is(req.body)) {
      let result = users.login(req.body);
      if (result.success) {
        res.cookie('auth', result.data, { expires: moment().add(1, 'month').toDate() });
        res.redirect(req.query.redirect);
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
          res.cookie('auth', result.data, { expires: moment().add(1, 'month').toDate() });
          res.redirect(req.query.redirect);
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

  router.post('/profile', checkPermissions(Permissions.STUDENT), (req: Request, res: Response) => {
    if (UpdateProfileRequest.is(req.body)) {
      let result = users.updateProfile(req.cookies.auth.email, req.body.profile)
      if (result.success) {
        respond<UpdateProfileResponse>(res, { profile: result.data });
      } else {
        res.status(400).send(result.data);
      }
    } else {
      res.status(400).send('Bad request');
    }
  });

  router.get('/profile', checkPermissions(Permissions.STUDENT), (req: Request, res: Response) => {
    let result = users.getProfile(req.cookies.auth.email);
    if (result.success) {
      res.status(200).send(result.data);
    } else {
      res.status(400).send('Bad request');
    }
  });

  router.get('/profile/:email', checkPermissions(Permissions.ADMIN), (req: Request, res: Response) => {
    let result = users.getProfile(req.params.email);
    if (result.success) {
      res.status(200).send(result.data);
    } else {
      res.status(400).send('Not found');
    }
  });

  router.post('/profile/:email', checkPermissions(Permissions.ADMIN), (req: Request, res: Response) => {
    if (UpdateProfileRequest.is(req.body) && req.params.email) {
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

  router.get('/profiles', checkPermissions(Permissions.STUDENT), (req: Request, res: Response) => {
    res.status(200).send(users.getProfiles());
  });

  router.get('/invite', checkPermissions(Permissions.ADMIN), (req: Request, res: Response) => {
    res.json(invites.create());
  });

  return router;
}

export { buildRouter };
