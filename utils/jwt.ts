import * as jwt from 'jsonwebtoken';

const JWT_SECRET = (process.env.JWT_SECRET as string);

export const sign = (payload: string, duration = '1h') => jwt.sign(
  payload, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: duration,
  },
);

export const verify = (token: string) => jwt.verify(
  token, JWT_SECRET, { algorithms: ['HS256'] },
);