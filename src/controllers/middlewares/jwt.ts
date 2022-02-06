import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';

import { verify } from '../../../utils/jwt';
import { userService } from "../../services";

export const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ message: 'Token not found' });
    return;
  }

  try {
    const verifiedToken = verify(authorization) as JwtPayload;
    req.user = verifiedToken;

    const user = await userService.getByEmail(verifiedToken.email);
    req.user.id = user?.id;

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Expired or invalid token' });
    return;
  }
};