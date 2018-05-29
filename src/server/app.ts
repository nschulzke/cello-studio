import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import { Strategy, IVerifyOptions } from 'passport-local';
import * as bcrypt from 'bcrypt';
import { Maybe } from 'app/shared/types';
import { router as apiRouter } from './routes/api';

type User = {
  email: string,
  passwordHash: string,
};

const user: User = {
  email: 'test@test.com',
  passwordHash: 'bcrypt-hashed-password',
};

const findUser = (email: string, callback: (err: Maybe<Error>, user: User) => void) => {
  callback(null, user);
};

passport.use(new Strategy(
  (email: string, password: string, done: (err: Maybe<Error>, user?: User | false, options?: IVerifyOptions) => void) => {
    findUser(email, (err, user) => {
      if (err) {
        return done(err);
      }

      // User not found
      if (!user) {
        return done(null, false);
      }

      // Always use hashed passwords and fixed time comparison
      bcrypt.compare(password, user.passwordHash, (err, isValid) => {
        if (err) {
          return done(err);
        }
        if (!isValid) {
          return done(null, false);
        }
        return done(null, user);
      });
    });
  },
));

const app: express.Express = express();

app.use(bodyParser.json());
app.use('/api', apiRouter);
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'testsecret',
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(async (req, res) => {
  res.render('index');
});

export default app;
