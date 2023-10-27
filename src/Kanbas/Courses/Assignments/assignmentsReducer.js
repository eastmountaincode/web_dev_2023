import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
    assignments: db.assignments,
    assignment: {
        title: "Default Assignment Title",
        course: "Default Course ID",
        dueDate: "2024-01-01",
        availableFromDate: "2023-12-01",
        availableUntilDate: "2024-01-15",
        description: "Default Assignment Description"
    }};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        setAssignment: (state, action) => {
            state.assignment = { ...state.assignment, ...action.payload };
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, selectAssignment, setAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
