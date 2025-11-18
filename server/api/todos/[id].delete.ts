import Todo from "../../models/Todo";
import { connectDB } from "../../utils/mongoose";

export default defineEventHandler(async (event) => {
    await connectDB();

    const id = event.context.params!.id;

    await Todo.findByIdAndDelete(id);

    return { success: true };
});
