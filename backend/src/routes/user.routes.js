import { Router } from "express";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema } from "../schemas/user.schema.js";
import { deleteUser, getUser, getUsers, login, register, updateUser } from "../controllers/user.controller.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", login);
router.get("/user", getUsers);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
