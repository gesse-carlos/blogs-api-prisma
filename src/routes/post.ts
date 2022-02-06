import { Router } from "express";

import { postController } from "../controllers";
import { postMiddleware, jwtMiddleware } from "../controllers/middlewares";

const Post = Router();

Post.post(
  '/',
  jwtMiddleware.validateJWT,
  postMiddleware.validateTitleContent,
  postMiddleware.validateCategory,
  postController.add,
);

Post.put(
  '/:id',
  jwtMiddleware.validateJWT,
  postMiddleware.validateTitleContent,
  postMiddleware.validateUpdate,
  postController.update,
);

Post.get(
  '/',
  jwtMiddleware.validateJWT,
  postController.getAll,
);

Post.get(
  '/search',
  jwtMiddleware.validateJWT,
  postController.search,
);

Post.get(
  '/:id',
  jwtMiddleware.validateJWT,
  postController.getById,
);

Post.delete(
  '/:id',
  jwtMiddleware.validateJWT,
  postMiddleware.validateDelete,
  postController.remove,
);

export default Post;