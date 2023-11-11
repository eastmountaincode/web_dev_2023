import axios from "axios";

const ASSIGNMENTS_URL = "https://kanbas-node-server-app-8b6l.onrender.com/api/assignments";

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
