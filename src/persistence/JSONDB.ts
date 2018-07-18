import * as fs from 'fs';

export const jsonDB = (path) => ({
  read() {
    return JSON.parse(fs.readFileSync(path).toString());
  },

  write(object): void {
    fs.writeFile(path, JSON.stringify(object), (err) => {
      if (err) throw err;
    });
  }
});
