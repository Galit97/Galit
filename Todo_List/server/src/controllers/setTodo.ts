import Todo from "../models/TodoModel";

export const setTodo = async (req: any, res: any) => {
  try {
    const { title, description, isDone } = req.body;
    const userId = req.cookies?.userId;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    if (!title || !description) {
      return res.status(400).json({ error: "Title and description are required." });
    }

    const newTodo = await Todo.create({ userId, title, description, isDone });
    res.status(201).json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create todo." });
  }
};
