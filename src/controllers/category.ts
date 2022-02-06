import { Request, Response } from "express";
import rescue from 'express-rescue';
import { categoryService } from "../services";

export const add = rescue(async (req: Request, res: Response) => {
  const { name } = req.body;

  const category = await categoryService.add(name);

  res.status(201).json(category);
});

export const getAll = rescue(async (_req: Request, res: Response) => {
  const categories = await categoryService.getAll();

  res.status(200).json(categories);
});