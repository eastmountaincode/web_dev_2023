import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return (
    <div className="dashboard-container ps-4 pe-4 pt-3">
      <div className="dashboard-header">
        <h1 className="header-text display-6" style={{"margin-bottom": "-3px"}}>Dashboard</h1>
        <hr></hr>
      </div>
      <div className="inner-dashboard-content ps-4 pt-1">
        <h3>Published Courses</h3>
        <hr></hr>
        <div className="card-container pt-1">
          {db.courses.map((course) => (
            <div className="">
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card-link">
            <div className="card dashboard-course-card">
              <img src="https://media.istockphoto.com/id/1309453432/video/abstract-corporate-blue-motion-background-seamless-looping.jpg?s=640x640&k=20&c=U0O8Zx3QvIQ4Pqm4zFIfuN1ZVScpL9FHF32DCTpqBDY=" alt="generic course image" />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.number}</p>
                <p className="card-subtitle text-muted">{course.startDate}, {course.endDate}</p>
              </div>
            </div>
            </Link>
            </div>
          ))} 
        </div>
      </div>
    </div>
  ); }
export default Dashboard;