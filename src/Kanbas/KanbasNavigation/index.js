import { Link, useLocation } from "react-router-dom";
import './index.css';
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { faUser, faTachometerAlt, faBook, faCalendar } from '@fontawesome/free-solid-svg-icons';


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
    <div className="list-group main-nav-sidebar" style={{ width: '85px' }}>
        <ul class="sidebar-element-logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2V8BuW7n0uy8uY8krUGiY5bXk0LN8RZe4cw&usqp=CAU" alt="northeastern logo"></img></ul>
        {links.map((link, index) => (
        <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item main-nav-sidebar-element ${pathname.includes(link) && "active"}`}>
            <FontAwesomeIcon icon={linkIcons[link]}></FontAwesomeIcon> {link}
        </Link>
        ))} 
    </div>
    ); 
}
export default KanbasNavigation;