import app from './App';
import { User } from 'studio-shared';

const port: number = process.env.PORT || 5000;

app.listen(port, (err: any) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${port}`);
});
