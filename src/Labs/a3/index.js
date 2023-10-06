import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import JavaScript from "./JavaScript";
import Styles from "./Styles";
import TodoList from "./Todo/TodoList";

function Assignment3() {
    return (
        <div className="container">
            <h1>Assignment 3</h1>
            <TodoList />
            <ConditionalOutput />
            <Styles />
            <Classes />
            <JavaScript />
        </div>
    )
}

export default Assignment3;