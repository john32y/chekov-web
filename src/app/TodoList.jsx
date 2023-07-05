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
        <section>
        {TodoItems.map(item =>(
            <p key={item.id}>{item.title}</p>
        ))}

        </section>
    )
}