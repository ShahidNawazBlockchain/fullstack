import { Router } from "express";
import {
  createList,
  getAllLists,
  updateList,
  deleteList,
} from "../controllers/list.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Protect routes with authentication middleware
router.use(verifyJWT);

// CRUD routes for lists
router.post("/create", createList); // Create a new list item
router.get("/create", getAllLists); // Get all tasks for the authenticated user
router.put("/update/:id", updateList); // Update a task for the authenticated user
router.delete("/delete/:id", deleteList); // Delete a task for the authenticated user

export default router;
