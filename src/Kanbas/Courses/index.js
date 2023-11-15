import { Navigate, Route, Routes } from "react-router-dom";
import CourseNavigation from "./CourseNavigation/index.js"
import './index.css'
import Modules from "./Modules/index.js";
import Home from "./Home/index.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Assignments from "./Assignments/index.js";
import AssignmentEditor from "./Assignments/AssignmentEditor/index.js";
import Grades from "./Grades/index.js";
import CourseSettings from "./CourseSettings/index.js"
import CoursesHeader from "./CoursesHeader/index.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function Courses() {
    const API_BASE_URL = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
    console.log("in courses, API BASE URL is: ", API_BASE_URL);

    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${API_BASE_URL}/${courseId}`
        );
        setCourse(response.data);
    }
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId])

    return (
        <div className="container-fluid" style={{paddingTop: "0"}}>
            <div className="">
                <CoursesHeader course={course}/>
            </div>
            <div className="row">
                <div className="d-flex">
                    <div className="d-none d-md-block" style={{minWidth: "200px"}}>
                        <CourseNavigation />
                    </div>
                    <div className="w-100">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Piazza" element={<h1>Piazza</h1>} />
                            <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route
                                path="Assignments/:assignmentId"
                                element={<AssignmentEditor />}
                            />
                            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                            <Route path="Grades" element={<Grades />} />
                            <Route path="People" element={<h1>People</h1>} />
                            <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
                            <Route path="Discussions" element={<h1>Discussions</h1>} />
                            <Route path="Announcements" element={<h1>Announcements</h1>} />
                            <Route path="Pages" element={<h1>Pages</h1>} />
                            <Route path="Files" element={<h1>Files</h1>} />
                            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                            <Route path="Progress Reports" element={<h1>Progress Reports</h1>} />
                            <Route path="Settings" element={<CourseSettings />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    ); 
}
export default Courses;