import { Request, Response } from "express";
import rescue from 'express-rescue';
import { postService } from "../services";

export const add = rescue(async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const authorId = req.user.id;

  const post = await postService.add({ title, content, authorId });

  res.status(201).json(post);
});

export const getAll = rescue(async (req: Request, res: Response) => {
  const posts = await postService.getAll();

  res.status(200).json(posts);
});

export const getById = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;

  const post = await postService.getById(id);

  if (!post) {
    res.status(404).json({ message: 'Post does not exist' });
    return;
  }

  res.status(200).json(post);
});

export const update = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const authorId = req.user.id;

  const post = await postService.getById(id);

  if (!post) {
    res.status(404).json({ message: 'Post does not exist' });
    return;
  }

  const updatedPost = await postService.update(id, { title, content, authorId });

  res.status(200).json(updatedPost);
});

export const remove = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;

  const post = await postService.getById(id);

  if (!post) {
    res.status(404).json({ message: 'Post does not exist' });
    return;
  }

  await postService.remove(id);

  res.status(204).end();
});

export const search = rescue(async (req: Request, res: Response) => {
  const { query } = req.query;

  const posts = await postService.search(query as string);

  res.status(200).json(posts);
});