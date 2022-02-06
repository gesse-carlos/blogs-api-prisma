import { Request, Response, NextFunction } from 'express';
import { userService } from '../../services';

export const validateEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  if (email === '') {
    res.status(400).json({ message: '"email" is not allowed to be empty' });
    return;
  }

  if (!email) {
    res.status(400).json({ message: '"email" is required' });
    return;
  }

  next();
};

export const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (password === '') {
    res.status(400).json({ message: '"password" is not allowed to be empty' });
    return;
  }

  if (!password) {
    res.status(400).json({ message: '"password" is required' });
    return;
  }

  next();
};

export const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const user = await userService.getByEmail(email);

  if (!user) {
    res.status(400).json({ message: 'Invalid fields' });
    return;
  }

  if (password !== user.password) {
    res.status(400).json({ message: 'Invalid fields' });
    return;
  }

  next();
};