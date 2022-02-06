import { Request, Response } from "express";
import rescue from 'express-rescue';
import { loginService } from "../services";

export const login = rescue(async (req: Request, res: Response) => {
  const { email } = req.body;

  const token = loginService.login(email);

  res.status(200).json({ token });
});