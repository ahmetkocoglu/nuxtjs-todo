import Todo from "../models/Todo";
import { connectDB } from "../utils/mongoose";

export default defineEventHandler(async (event) => {
    await connectDB();

    const body = await readBody(event);

    const todo = await Todo.create({
        title: body.title
    });

    return todo;
});
