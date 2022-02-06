import { Router } from "express";
import { categoryController } from "../controllers";

const Category = Router();

Category.post(
  '/',
  categoryController.add,
);

Category.get(
  '/',
  categoryController.getAll,
);

export default Category;