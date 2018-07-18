import * as jwt from 'jsonwebtoken';

export const prepareTokens = ({ secret, duration }) => ({
  encode: (payload) =>
    jwt.sign({ data: payload }, secret, { expiresIn: duration }),

  decode: (token) => {
    try {
      return jwt.verify(token, secret).data;
    } catch (e) {
      return false;
    }
  },
})
