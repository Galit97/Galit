import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  isDone: { type: Boolean, default: false }, 
});

const TodoModel = mongoose.model("TodoModel", todoSchema);
export default TodoModel;
