import Todo from "../../models/Todo";
import { connectDB } from "../../utils/mongoose";

export default defineEventHandler(async (event) => {
    await connectDB();

    const id = event.context.params!.id;
    const body = await readBody(event);

    return Todo.findByIdAndUpdate(id, body, { new: true });
});
