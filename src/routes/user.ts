import { Router } from "express";

import { userController } from '../controllers';
import { userMiddleware, jwtMiddleware } from "../controllers/middlewares";

const User = Router();

User.post(
  '/',
  userMiddleware.validateName,
  userMiddleware.validateEmail,
  userMiddleware.validatePassword,
  userController.add,
);

User.get(
  '/',
  jwtMiddleware.validateJWT,
  userController.getAll,
);

User.get(
  '/:id',
  jwtMiddleware.validateJWT,
  userController.getById,
);

User.delete(
  '/me',
  jwtMiddleware.validateJWT,
  userController.remove,
);

export default User;