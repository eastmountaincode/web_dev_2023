import {Link, useLocation} from "react-router-dom"

function Nav() {
    const { pathname } = useLocation();
    return (
        <div>
            <nav className="nav nav-tabs mt-2">
            <Link to="/Labs/a3" className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>A3 (Lab)</Link>
            <Link to="/Labs/a4" className={`nav-link ${pathname.includes("a4") ? "active": ""}`}>A4 (Lab)</Link>
            <Link to="/Labs/a5" className={`nav-link ${pathname.includes("a5") ? "active": ""}`}>A5 (Lab)</Link>
            <Link to="/hello" className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Hello</Link>
            <Link to="/Kanbas" className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
            </nav>
        </div>
    );
}
export default Nav;