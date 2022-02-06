import { Router } from "express";

import { loginController } from "../controllers";
import { loginMiddleware } from "../controllers/middlewares";

const Login = Router();

Login.post(
  '/',
  loginMiddleware.validateEmail,
  loginMiddleware.validatePassword,
  loginMiddleware.validateLogin,
  loginController.login,
);

export default Login;