import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation"
import './index.css'
import { FaBars, FaGlasses } from 'react-icons/fa';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css';




function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    const location = useLocation();
    const currentPage = decodeURIComponent(location.pathname.split("/").pop()) || "Home";
    return (
        <div className="container-fluid" style={{overflow: "hidden"}}>
            <div className="row">
                <div style={{padding: "0", paddingTop: "5px", paddingBottom: "6px"}}>
                    <div className="d-flex float-start">
                        <div style={{padding: "0", marginRight: "20px"}}>
                            <FaBars size={22} style={{color: "rgb(183, 44, 44)", transform: "scaleX(1.2)"}}/>
                        </div>
                        <nav aria-label="breadcrumb" style={{paddingTop: "1px"}}>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <Link to={`/Kanbas/Courses/${courseId}/Home`} className="red-link no-text-decoration">{course.name}.{courseId}</Link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">{currentPage}</li>
                            </ol> 
                        </nav>
                    </div>
                    <button class="btn btn-outline-secondary float-end student-view-button" style={{marginTop: "-5px"}}><FaGlasses style={{marginRight: "5px",}}/>Student View</button>
                </div>
                <hr></hr>
            </div>
            <div className="row">
                <div className="d-flex">
                    <div style={{minWidth: "200px"}}>
                        <CourseNavigation />
                    </div>
                    <div className="ps-3 w-100">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Piazza" element={<h1>Piazza</h1>} />
                            <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                            <Route path="Assignments" element={<h1>Assignments</h1>} />
                            <Route
                                path="Assignments/:assignmentId"
                                element={<h1>Assignment Editor</h1>}
                            />
                            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                            <Route path="Grades" element={<h1>Grades</h1>} />
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
                            <Route path="Settings" element={<h1>Settings</h1>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    ); 
}
export default Courses;