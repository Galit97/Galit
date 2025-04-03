import { Request, Response } from "express";
import Todo from "../models/TodoModel";

export const deleteTodo = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted successfully", todo: deletedTodo });
  } catch (error) {
    res.status(500).json({ error: "Error deleting todo" });
  }
};
