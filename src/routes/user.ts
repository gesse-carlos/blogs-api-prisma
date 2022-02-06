import { Router } from "express";
import { userController } from '../controllers';

const User = Router();

User.post(
  '/',
  userController.add,
);

User.get(
  '/',
  userController.getAll,
);

User.get(
  '/:id',
  userController.getById,
);

User.delete(
  '/me',
  userController.remove,
);

export default User;