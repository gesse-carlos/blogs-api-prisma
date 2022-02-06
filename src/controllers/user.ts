import { Request, Response } from "express";
import rescue from 'express-rescue';
import { userService } from "../services";

export const add = rescue(async (req: Request, res: Response) => {
  const { name, email, password, image } = req.body;

  const user = await userService.add({ name, email, password, image });

  res.status(201).json(user);
});

export const getAll = rescue(async (_req: Request, res: Response) => {
  const users = await userService.getAll();

  res.status(200).json(users);
});

export const getById = rescue(async (req: Request, res: Response) => {
  const user = await userService.getById(req.params.id);

  if (!user) {
    res.status(404).json({ message: 'User does not exist' });
    return;
  }

  res.status(200).json(user);
});

export const remove = rescue(async (req: Request, res: Response) => {
  const { id } = req.user;

  await userService.remove(id);

  res.status(204).end();
});