import express from "express";
import MyUserController from "../controllers/user.controller";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateMyUserRequest } from "../middlewares/validation";
const router = express.Router();

router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  MyUserController.updateCurrentUser
);
router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);
export default router;
