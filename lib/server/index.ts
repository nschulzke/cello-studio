import app from './app';
import config from '../config';

app.listen(config.port, (err: any) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${config.port}`);
});
