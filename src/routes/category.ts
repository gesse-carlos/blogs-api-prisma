import { Router } from "express";

import { categoryController } from "../controllers";
import { jwtMiddleware, categoryMiddleware } from "../controllers/middlewares";

const Category = Router();

Category.post(
  '/',
  jwtMiddleware.validateJWT,
  categoryMiddleware.validateName,
  categoryController.add,
);

Category.get(
  '/',
  jwtMiddleware.validateJWT,
  categoryController.getAll,
);

export default Category;