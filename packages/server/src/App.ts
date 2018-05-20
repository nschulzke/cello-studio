import * as express from 'express';

class App {
  public express: express.Express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router: express.Router = express.Router();
    router.get('/login', (req: express.Request, res: express.Response) => {
      res.json({
        token: 'teststring',
        user: {
          studentName: 'teststudent',
          parentName: 'testparent',
          email: req.body.email,
          password: req.body.password,
          contactPhone: '',
          contactEmail: 'test@test.com',
          contactType: 0,
        },
      });
    });
    this.express.use('/api', router);
  }
}

export default new App().express;
