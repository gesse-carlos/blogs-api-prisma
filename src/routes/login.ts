import { Router } from "express";
import { loginController } from "../controllers";

const Login = Router();

Login.post(
  '/',
  loginController.login,
);

export default Login;