import { useState} from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo() {
    const [TodoItems, setTodoItems] = useState();
    return(
        <main className="bg-violet-900 min-h-screen text-orange-50 text-center">
            <h1 className="text 3xl font-semibold mb-4">Chekov Todo List</h1>
            <AddTodo setTodoItems={setTodoItems}/>
            <TodoList TodoItems={TodoItems} setTodoItems={setTodoItems} />
        </main>
    )
}