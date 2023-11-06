import Classes from "./Classes/index.js";
import ConditionalOutput from "./ConditionalOutput/index.js";
import JavaScript from "./JavaScript.js";
import Styles from "./Styles/index.js";
import TodoList from "./Todo/TodoList.js";
import { useSelector } from "react-redux"

function Assignment3() {
    const { todos } = useSelector((state) => state.todosReducer)
    return (
        <div className="container">
            <h1>Assignment 3</h1>
            <ul className="list-group">
                {todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                {todo.title}
                </li>
                ))} 
            </ul>
            <TodoList />
            <ConditionalOutput />
            <Styles />
            <Classes />
            <JavaScript />
        </div>
    )
}

export default Assignment3;