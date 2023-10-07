import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="header-text display-6">Dashboard</h1>
        <hr></hr>
      </div>
      <div className="inner-dashboard-content">
        <h3>Published Courses</h3>
        <hr></hr>
        <div className="card-container">
          {db.courses.map((course) => (
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
          ))} 
        </div>
      </div>
    </div>
  ); }
export default Dashboard;