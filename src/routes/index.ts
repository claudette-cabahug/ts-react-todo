import { Router } from "express";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todos";

const routes: Router = Router();

routes.get("/todos", getTodos);
routes.post("/todos", addTodo);
routes.put("/todos/:id", updateTodo);
routes.delete("/todos/:id", deleteTodo);

export default routes;