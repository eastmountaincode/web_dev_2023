import { Link } from "react-router-dom";
import { FaBars, FaGlasses } from 'react-icons/fa';
import { useLocation, useParams } from "react-router-dom";
import db from "../../../Kanbas/Database";
import { useState, useEffect } from "react";
import { Dropdown } from 'react-bootstrap';
import Dashboard from "../../Dashboard"
import CourseNavigation from "../CourseNavigation";
import "./index.css"


function CoursesHeader() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    const location = useLocation();
    const currentPage = decodeURIComponent(location.pathname.split("/").pop()) || "Home";

    const [isScreenWidthMdOrLarger, setIsScreenWidthMdOrLarger] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenWidthMdOrLarger(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isScreenWidthMdOrLarger) {
        return (
            <div className= "mb-2" style={{paddingLeft: "28px",
                                           paddingRight: "28px",
                                           paddingTop: "20px"}}>
                <div className="mb-5" style={{padding: "0", paddingTop: "5px"}}>
                    <div className="d-flex float-start">
                        <div style={{padding: "0", marginRight: "20px"}}>
                            <FaBars size={22} style={{color: "rgb(183, 44, 44)", transform: "scaleX(1.2)"}}/>
                        </div>
                        {/* BREADCRUMB */}
                        <nav aria-label="breadcrumb" style={{paddingTop: "1px"}}>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={`/Kanbas/Courses/${courseId}/Home`} className="red-link no-text-decoration">{course.name}.{course.number}</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
                            </ol> 
                        </nav>
                    </div>
                    <button className="btn btn-outline-secondary float-end student-view-button" style={{marginTop: "-5px"}}><FaGlasses style={{marginRight: "5px",}}/>Student View</button>
                </div>
                <hr className="w-100"></hr>
            </div>
        );
    } else {
        return (
            <div className="navbar bg-dark d-md-none mb-2 small-screen-dark-header p-3">

                <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                        <FaBars />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/Kanbas/Account">Account</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/Kanbas/Dashboard" element={<Dashboard />}>Dashboard</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/Kanbas/Courses">Courses</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/Kanbas/Calendar">Calendar</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <span style={{ color: "white", fontSize: "small" }}>CS4550.12631.202410 Modules</span>

                <Dropdown className="pe-2">
                    <Dropdown.Toggle variant="outline-secondary" id="courseNavigationDropdown">
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-3">
                        <CourseNavigation />
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

export default CoursesHeader;





