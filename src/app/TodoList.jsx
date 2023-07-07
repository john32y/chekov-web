import TodoListitem from "./TodoListitem";
import { useEffect, useContext } from "react";
import { AuthContext } from "../App";

export default function TodoList({ TodoItems, setTodoItems}) {
    const { user } = useContext(AuthContext);
     useEffect(() => {
        if(user) {
            fetch(`https://chekov-api-jct.web.app/tasks/${user.uid}`)
            .then(res => res.json())
            .then(setTodoItems)
            .catch(alert);
        }
    }, [user]);

    if(!TodoItems) return <h2>Loading...</h2>

    return(
        <section className="cointainer flex flex-col items-center justify-center w-full mx-auto bg-violet-950 rounded-lg shadow mt-4">
            <ul className="flex flex-col divide-y divide w-full">

        {TodoItems.map(item =>(
            <TodoListitem key={item.id} item={item} />
            ))}
            </ul>
        </section>

    )
}