import Todo from "../models/Todo";
import { connectDB } from "../utils/mongoose";

export default defineEventHandler(async () => {
    await connectDB();
    return Todo.find();
});
