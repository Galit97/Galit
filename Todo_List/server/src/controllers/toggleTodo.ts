import Todo from "../models/TodoModel";

export const toggleTodo = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    todo.isDone = !todo.isDone;
    await todo.save();

    res.status(200).json({ message: "Todo status toggled successfully", todo });
  } catch (error) {
    res.status(500).json({ error: "Error toggling todo status" });
  }
};