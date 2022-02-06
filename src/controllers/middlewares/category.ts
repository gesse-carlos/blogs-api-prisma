import { Request, Response, NextFunction } from 'express';

export const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: '"name" is required' });
    return;
  }

  next();
};