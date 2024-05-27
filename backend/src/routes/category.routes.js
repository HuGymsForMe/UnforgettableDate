import { Router } from "express";
import { AddCategory, UpdateCategory, deleteCategory, getCategories, getCategory } from "../controllers/category.controller.js";

const router = Router();

router.get("/category", getCategories);
router.get("/category/:id", getCategory);
router.post("/category", AddCategory);
router.put("/category/:id", UpdateCategory);
router.delete("/category/:id", deleteCategory);

export default router;