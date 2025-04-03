import { Request, Response } from "express";
import Todo from "../models/TodoModel";

export const getTodos = async (req: any, res: any) => {
  try {
    const todos = await Todo.find(); 
    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ message: "Error fetching todos" });
  }
};
