import * as bcrypt from 'bcrypt';

export const credentials = {
  hash: ({ email, password }) => ({
    email,
    hash: bcrypt.hashSync(password, 10)
  }),

  compare: ({ email: sentEmail, password }, { email: trueEmail, hash } = { email: false, hash: '' }) =>
    sentEmail === trueEmail
    && bcrypt.compareSync(password, hash),
}
