import { Link, useParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


function CourseNavigation() {
    const links = [
        "Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", 
        "Grades", "People", "Panopto Video", "Discussions", "Announcements", 
        "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", 
        "Progress Reports", "Settings"
    ];
    const linksWithEyeSlash = ["Discussions", "Announcements", "Pages",
                               "Files", "Rubrics", "Outcomes", "Collaborations",
                               "Syllabus"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="list-group" style={{ width: 150 }}>
            <div className="list-unstyled">
                <li className="">202410_1 Fall 2023 Semester</li>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/Courses/${courseId}/${link}`}
                        className={`list-group-item ${pathname.includes(link) && "active"}`}>
                        {link}
                        {linksWithEyeSlash.includes(link) && <FontAwesomeIcon icon={faEyeSlash} className="float-end" style={{ marginLeft: '5px', marginTop: '5px' }} />}
                    </Link>
                ))} 
            </div>
        </div>
    ); 
}
export default CourseNavigation;
