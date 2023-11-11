import { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithArrays() {
    const A5_BASE = process.env.REACT_APP_A5_BASE;

    const API = `${A5_BASE}/todos`;
    
    const [todo, setTodo] = useState({
        id: 1,
        title: "nodeJS assignment",
        description: "create a nodejs server with expressjs",
        due: "2021-09-09",
        completed: false,
    });
    const [todos, setTodos] = useState([]);
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data])
    };
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data)
    };
    const removeTodo = async (todo) => {
        const response = await axios.get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    }
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    }
    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    }
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    }
    const deleteTodo = async (todo) => {
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
    };

    const updateTodo = async () => {
        const response = await axios.put(
            `${API}/${todo.id}`,
            todo
        );
    
        setTodos(todos.map((t) =>
            t.id === todo.id ? todo : t
        ));
    
        setTodo({});
    };
    

      


    useEffect(() => {
        fetchTodos();
    }, [todos]);

    return (
        <div>
            <h2>Working with Arrays</h2>
            <h4>Todo List View</h4>
            <ul className="list-group mb-2 w-75">
            {todos.map((todo) => (
                <li key={todo.id} className="list-group-item">
                    <div className="float-end">
                        <button
                            onClick={() => fetchTodoById(todo.id)}
                            className="btn btn-warning me-2">
                            Edit
                        </button>
                        <button
                            onClick={() => deleteTodo(todo)}
                            className="btn btn-danger">
                            Remove
                        </button>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="me-2 mb-0">Completed:</p>
                        <input
                            checked={todo.completed}
                            type="checkbox"
                            readOnly
                        />
                    </div>
                    <p>Title: {todo.title}</p> 
                    <p>Description: {todo.description}</p>
                    <p>Due: {todo.due}</p>
                </li>
                ))}
            </ul>

            <h4>Todo List operations</h4>
            <div className="form-group">
                <label htmlFor="todoId">Todo ID</label>
                <input
                    id="todoId"
                    name="id"
                    value={todo.id}
                    readOnly
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label htmlFor="todoTitle">Title</label>
                <input
                    id="todoTitle"
                    name="title"
                    value={todo.title}
                    onChange={(e) => setTodo({
                        ...todo, title: e.target.value })}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label htmlFor="todoDescription">Description</label>
                <textarea
                    id="todoDescription"
                    name="description"
                    value={todo.description}
                    onChange={(e) => setTodo({
                        ...todo, description: e.target.value })}
                    className="form-control mb-2"
                />
            </div>

            <div className="form-group">
                <label htmlFor="todoDueDate">Due Date</label>
                <input
                    id="todoDueDate"
                    name="due"
                    value={todo.due}
                    onChange={(e) => setTodo({
                        ...todo, due: e.target.value })}
                    type="date"
                    className="form-control mb-2"
                />
            </div>



            <div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="arrayCompletedStatus"
                            value="true"
                            checked={todo.completed === true}
                            onChange={(e) => setTodo({ ...todo, completed: e.target.value === 'true' ? true : false })}
                        />
                        Completed
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="arrayCompletedStatus"
                            value="false"
                            checked={todo.completed === false}
                            onChange={(e) => setTodo({ ...todo, completed: e.target.value === 'true' ? true : false })}
                        />
                        Not Completed
                    </label>
                </div>
            </div>
            <div className="d-flex justify-content-left mb-3 mt-2">
                <div className="todoOperationButtons mt-2" style={{ maxWidth: '300px' }}>
                    <button onClick={postTodo} className="btn btn-warning w-100 mb-2">
                        Post Todo
                    </button>
                    <button onClick={createTodo} className="btn btn-primary w-100">
                        Create Todo With Axios
                    </button>
                    <button className="w-100 mt-2 btn btn-success " onClick={updateTodo}>
                        Update Todo
                    </button>
                    <button className="w-100 mt-2 btn btn-success mb-2"
                        onClick={updateTitle}>
                            Update Title with Axios
                    </button>
                </div>
            </div>



            {/* ------ */}
            


            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`} className="btn btn-primary me-2">
                Delete Todo with ID = {todo.id}
            </a>
            <h3>Updating an Item in an Array</h3>
            <a
                href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary me-2"
            >
                Update Title to {todo.title}
            </a>
            <button className="w-25 mt-2 btn btn-success mb-2"
                onClick={updateTitle}>
                    Update Title with Axios
            </button>
            <h3>Updating description</h3>
            <a
                href={`${API}/${todo.id}/description/${todo.description}`}
                className="btn btn-primary me-2"
            >
                Update Description
            </a>
            <h3>Updating completed status</h3>
            <a
                href={`${API}/${todo.id}/completed/${todo.completed}`}
                className="btn btn-primary me-2"
            >
                Update Completed Status
            </a>
            <h4>Retrieving Arrays</h4>
            <a href={API} className="btn btn-primary me-2">
                Get Todos
            </a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <input
                className="form-control"
                value={todo.id}
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            />
            <a href={`${API}/${todo.id}`} className="btn btn-primary me-2">
                Get Todo by ID
            </a>
            <h3>Filtering Array Items</h3>
            <a href={`${API}?completed=true`} className="btn btn-primary me-2">
                Get Completed Todos
            </a>
            <h4>Creating New Items in an Array</h4>
            <a href={`${API}/create`} className="btn btn-primary me-2">
                Create Todo
            </a>
            <div className="w-25 mt-2">
                <button onClick={createTodo}
                    className="btn btn-primary mb-2 w-100">
                    Create Todo With Axios
                </button>
            </div>
        </div>
    );
}

export default WorkingWithArrays;

