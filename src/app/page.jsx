import { useState} from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo() {
    const [TodoItems, setTodoItems] = useState();
    return(
        <main>
            <h1>Chekov Todo List</h1>
            <AddTodo setTodoItems={setTodoItems}/>
            <TodoList TodoItems={TodoItems} setTodoItems={setTodoItems} />
        </main>
    )
}