import { Link, useParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


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
        <div className="" style={{ width: '200px' }}>
            <ul className="list-unstyled">
                <li className="mb-2" style={{fontSize: "small", fontStyle: "italic"}}>202410_1 Fall 2023 Semester</li>
                {links.map((link, index) => {
                    // Replace space with %20 for this operation
                    const encodedLink = encodeURIComponent(link);
                    const isActive = ( pathname === `/Kanbas/Courses/${courseId}/${encodedLink}` );
                    return (
                        <Link
                            key={index}
                            to={`/Kanbas/Courses/${courseId}/${encodedLink}`}
                            className={`list-group-item ${isActive ? "selected" : "non-selected"}`}>
                            {link}
                            {linksWithEyeSlash.includes(link) && <FontAwesomeIcon icon={faEyeSlash} className="float-end" style={{ marginLeft: '5px', marginTop: '5px', color: 'black' }} />}
                        </Link>
                    );
                })} 
            </ul>
        </div>
    ); 
}
export default CourseNavigation;
