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
        <div className="list-group main-nav-sidebar vh-100" style={{ width: '85px' }}>
            <ul className="sidebar-element-logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2V8BuW7n0uy8uY8krUGiY5bXk0LN8RZe4cw&usqp=CAU" alt="northeastern logo"></img>
            </ul>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item main-nav-sidebar-element ${pathname.includes(link) && "active"}`}>
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