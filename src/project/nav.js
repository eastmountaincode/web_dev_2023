import { Link, useLocation } from "react-router-dom";

function ProjectNav() {
    const { pathname } = useLocation();

    return (
        <div className="list-group">
            <Link to="/project/home" className={`list-group-item list-group-item-action ${pathname === "/project/home" ? "active" : ""}`}>Home</Link>
            <Link to="/project/search" className={`list-group-item list-group-item-action ${pathname === "/project/search" ? "active" : ""}`}>Search</Link>
            <Link to="/project/signin" className={`list-group-item list-group-item-action ${pathname === "/project/signin" ? "active" : ""}`}>SignIn</Link>
            <Link to="/project/signup" className={`list-group-item list-group-item-action ${pathname === "/project/signup" ? "active" : ""}`}>SignUp</Link>
            <Link to="/project/account" className={`list-group-item list-group-item-action ${pathname === "/project/account" ? "active" : ""}`}>Account</Link>
        </div>
    );
}

export default ProjectNav;



