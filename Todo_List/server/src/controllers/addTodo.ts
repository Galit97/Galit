import { Request, Response } from "express";
import Todo from "../models/TodoModel";

export const addTodo = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  try {
    const newTodo = new Todo({
      title,
      description,
      isDone: false,
    });
    await newTodo.save();
    res.status(201).json(newTodo); 
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).json({ message: "Error adding todo" });
  }
};