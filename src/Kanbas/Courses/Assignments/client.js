import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

const ASSIGNMENTS_URL = `${API_BASE}/assignments`;

export const getAssignments = async () => {
    console.log("initiating getAssignments")
    const response = await axios.get(ASSIGNMENTS_URL);
    console.log("after response");
    return response.data;
};

export const getAssignment = async (assignmentId) => {
    const response = await axios.get(`${ASSIGNMENTS_URL}/${assignmentId}`);
    return response.data;
};

export const createAssignment = async (assignment) => {
    const response = await axios.post(ASSIGNMENTS_URL, assignment);
    return response.data;
};

export const updateAssignment = async (assignment) => {
    const response = await axios.put(`${ASSIGNMENTS_URL}/${assignment._id}`, assignment);
    return response.data;
};

export const deleteAssignment = async (assignmentId) => {
    const response = await axios.delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
    return response.data;
};
