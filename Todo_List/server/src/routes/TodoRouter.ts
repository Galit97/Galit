import express from "express";
import { getTodos } from "../controllers/getTodos";
import { addTodo } from "../controllers/addTodo";
import { deleteTodo } from "../controllers/deleteTodo";
import { toggleTodo } from "../controllers/toggleTodo";

const router = express.Router();

router.get("/get-todos", getTodos);
router.post("/add-todo", addTodo);
router.delete("/delete-todo/:id", deleteTodo); 
router.patch("/toggle-todo/:id", toggleTodo);  

export default router;
