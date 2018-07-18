import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as passport from 'passport';
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
