import * as jwt from 'jsonwebtoken';

export const prepareTokens = ({ secret, duration }) => ({
  encode: (payload) =>
    jwt.sign({ data: payload }, secret, { expiresIn: duration }),

  decode: (token) => {
    try {
      let result = jwt.verify(token, secret).data;
      return result;
    } catch (e) {
      return false;
    }
  },
})
