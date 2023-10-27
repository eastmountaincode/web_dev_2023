import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation"
import './index.css'
import { useLocation } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import CourseSettings from "./CourseSettings"
import CoursesHeader from "./CoursesHeader";




function Courses( {courses}) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId)
    
    const location = useLocation();
    const currentPage = decodeURIComponent(location.pathname.split("/").pop()) || "Home";
    return (
        <div className="container-fluid" style={{paddingTop: "0"}}>
            <div className="">
                <CoursesHeader/>
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