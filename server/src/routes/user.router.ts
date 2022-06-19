import { Router } from "express";
import {
  activateAccountHandler,
  loginAccountHandler,
  registerAccountHandler,
} from "../controllers/user.controller";
import validateInputMiddleware from "../middlewares/validateInput.middleware";
import {
  activateAccountValidation,
  loginAccountValidation,
  registerAccountValidation,
} from "../validations/user.validation";

const userRouter = Router();

userRouter.post(
  "/register",
  validateInputMiddleware(registerAccountValidation),
  registerAccountHandler
);

userRouter.post(
  "/activate",
  validateInputMiddleware(activateAccountValidation),
  activateAccountHandler
);

userRouter.post(
  "/login",
  validateInputMiddleware(loginAccountValidation),
  loginAccountHandler
);

export default userRouter;
