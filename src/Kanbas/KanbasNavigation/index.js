import { Link, useLocation } from "react-router-dom";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTachometerAlt, faBook, faCalendar } from '@fortawesome/free-solid-svg-icons';



function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar"];
    const linkIcons = {
        Account: faUser,
        Dashboard: faTachometerAlt,
        Courses: faBook,
        Calendar: faCalendar
    };
    const { pathname } = useLocation();
    return (
        <div className="list-group main-nav-sidebar vh-100 m-0 p-0 rounded-0 w-100">
            <ul className="sidebar-element-logo list-unstyled m-0 p-0">
                <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2V8BuW7n0uy8uY8krUGiY5bXk0LN8RZe4cw&usqp=CAU" alt="northeastern logo"></img>
            </ul>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`d-flex flex-column align-items-center justify-content-center list-group-item main-nav-sidebar-element m-0 pt-8 ${pathname.includes(link) && "active"}`}>
                    <div className="icon-wrapper">
                        {link === "Account" ? (
                            <FontAwesomeIcon icon={linkIcons[link]} className="account-icon" size="2x"/>
                        ) : (
                            <FontAwesomeIcon icon={linkIcons[link]} size="2x" className="non-account-icon" />
                        )}
                    </div>
                    <div className="text-wrapper">
                        {link}
                    </div>
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;