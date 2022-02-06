import { Request, Response, NextFunction } from 'express';
import { userService } from "../../services";

export const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name || name.length < 8) {
    res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
    return;
  }

  next();
};

export const validateEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: '"email" is required' });
    return;
  }

  if (!(/\S+@\S+\.\S+/.test(email))) {
    res.status(400).json({ message: '"email" must be a valid email' });
    return;
  }

  const user = await userService.getByEmail(email);

  if (user) {
    res.status(409).json({ message: 'User already registered' });
    return;
  }

  next();
};

export const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    res.status(400).json({ message: '"password" is required' });
    return;
  }

  if (password.length !== 6) {
    res.status(400).json(
      { message: '"password" length must be 6 characters long' },
    );
    return;
  }

  next();
}