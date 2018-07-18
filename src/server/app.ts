import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

import { buildRouter } from './routes/api';
import { hydrateUsers } from 'domain/users';
import { hydrateInvites } from 'domain/invites';
import { jsonDB } from 'persistence/JSONDB';
import { EventStream } from 'domain/helpers/EventStream';
import config from 'config';

const app: express.Express = express();

let userDB = jsonDB('data/users.json');
let userStream = EventStream();
userStream.subscribe(userDB.write);
let users = hydrateUsers(userStream, userDB.read(), config.secret);

let inviteDB = jsonDB('data/invites.json');
let inviteStream = EventStream();
inviteStream.subscribe(inviteDB.write);
let invites = hydrateInvites(inviteStream, inviteDB.read());

let apiRouter = buildRouter({ users, invites });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api', apiRouter);

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(async (req, res) => {
  if ((!req.cookies.auth || !users.fetchUser(req.cookies.auth.token).success) && req.path !== '/login' && req.path !== '/register') {
    res.redirect('/login?redirect=' + req.path);
  } else if (req.path === '/login') {
    res.render('login', { redirect: req.query.redirect });
  } else {
    res.render('index', { initialData: req.cookies.initialData });
  }
});

export default app;
