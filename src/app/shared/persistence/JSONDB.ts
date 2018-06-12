import * as fs from 'fs';

class JSONDB<T> {
  path: string;

  constructor(path: string) {
    this.path = 'data/' + path;
  }

  read(): T {
    return JSON.parse(fs.readFileSync(this.path).toString());
  }

  write<T>(object: T): void {
    fs.writeFile(this.path, JSON.stringify(object), (err) => {
      if (err) throw err;
    });
  }
}

export default JSONDB;
