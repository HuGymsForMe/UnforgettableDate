import { Router } from "express";
import { addTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/task.controller";

const router = Router();

router.get("/task", getTasks);
router.get("/task/:id", getTask);
router.post("/task", addTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

export default router;