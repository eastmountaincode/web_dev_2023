import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

const COURSES_URL = `${API_BASE}/courses`;
const MODULES_URL = `${API_BASE}/modules`;

export const deleteModule = async (moduleId) => {
    try {
        const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting module:", error);
        throw error; 
    }
};

export const createModule = async (courseId, module) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/modules`,
        module
    );
    return response.data;
}

export const findModulesForCourse = async (courseId) => {
    console.log("finding modules for course in client.js");
    const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
    return response.data;
};

export const updateModule = async (module) => {
    console.log("update module on client.js. making request to: ", `${MODULES_URL}/${module._id}`)
    const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
    return response.data;
};

