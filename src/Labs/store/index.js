import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer.js";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer.js";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer.js";
import todosReducer from "../a4/ReduxExamples/todos/todosReducer.js";

const store = configureStore({
    reducer: {
        helloReducer,
        counterReducer,
        addReducer,
        todosReducer
    },
});

export default store;
