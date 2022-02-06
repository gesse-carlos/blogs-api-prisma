import { Request, Response, NextFunction } from 'express';
import { categoryService, postService } from '../../services';
import { checkCategories } from '../../../utils/checkCategories';

export const validateTitleContent = async (req: Request, res: Response, next: NextFunction) => {
  const { title, content } = req.body;

  if (!title) {
    res.status(400).json({ message: '"title" is required' });
    return;
  }

  if (!content) {
    res.status(400).json({ message: '"content" is required' });
    return;
  }

  next();
};

export const validateCategory = async (req: Request, res: Response, next: NextFunction) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    res.status(400).json({ message: '"categoryIds" is required' });
    return;
  }

  const categories = await categoryService.getAll();
  const verifyCategories = checkCategories(categoryIds, categories);

  if (!verifyCategories) {
    res.status(400).json({ message: '"categoryIds" not found' });
    return;
  }

  next();
};

export const validateUpdate = async (req: Request, res: Response, next: NextFunction) => {
  if (req.body.categoryIds) {
    res.status(400).json({ message: 'Categories cannot be edited' });
    return;
  }

  const { id } = req.params;

  const post = await postService.getById(id);

  if (post?.authorId !== req.user.id) {
    res.status(401).json({ message: 'Unauthorized user' });
    return;
  }

  next();
};

export const validateDelete = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const post = postService.getById(id);

  if (!post) {
    res.status(404).json({ message: 'Post does not exist' });
    return;
  }

  next();
}