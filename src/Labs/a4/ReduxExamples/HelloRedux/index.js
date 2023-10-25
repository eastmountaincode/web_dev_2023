import { useSelector } from "react-redux";
import CounterRedux from "../CounterRedux";
import AddRedux from "../AddRedux";
import TodoList from "../todos/TodoList";

function HelloRedux() {
    const { message } = useSelector((state) => state.helloReducer);
    const { count } = useSelector((state) => state.counterReducer);

    return (
        <div style={{backgroundColor: "lightgrey"}}>
            <h1>Hello Redux</h1>
            <h2>{message}</h2>
            <CounterRedux />
            <p>{"Count from use selector: " + count}</p>
            <AddRedux />
            <TodoList />
            <br></br>
        </div>
    );
}

export default HelloRedux;
