import { Router } from "express";
import { postController } from "../controllers";

const Post = Router();

Post.post(
  '/',
  postController.add,
);

Post.put(
  '/:id',
  postController.update,
);

Post.get(
  '/',
  postController.getAll,
);

Post.get(
  '/search',
  postController.search,
);

Post.get(
  '/:id',
  postController.getById,
);

Post.delete(
  '/:id',
  postController.remove,
);

export default Post;