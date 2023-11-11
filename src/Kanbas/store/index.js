import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer.js";
import assignmentsReducer from "../Courses/Assignments/reducer.js";

const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentsReducer
    }
});

export default store;