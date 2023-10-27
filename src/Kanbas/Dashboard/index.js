import { React} from "react";
import { Link } from "react-router-dom";
import "./index.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse}) {


  return (
    <div className="dashboard-container ps-4 pe-4 pt-3">
      <div className="dashboard-header">
        <h1 className="header-text display-6" style={{"marginBottom": "-3px"}}>Dashboard</h1>
        <hr></hr>
      </div>
      <div className="courseEditArea ms-4 p-3 mb-1 border">
        <label htmlFor="courseName" className="form-label mb-0">Course Name</label>
          <input 
              id="courseName"
              value={course.name} 
              className="form-control w-50 mb-2" 
              onChange={(e) => setCourse({...course, name: e.target.value})}
          />
          
          <label htmlFor="courseNumber" className="form-label mb-0">Course Number</label>
          <input 
              id="courseNumber"
              value={course.number} 
              className="form-control w-50 mb-2" 
              onChange={(e) => setCourse({...course, number: e.target.value})}
          />
          
          <label htmlFor="startDate" className="form-label mb-0">Start Date</label>
          <input 
              id="startDate"
              value={course.startDate} 
              className="form-control w-50 mb-2" 
              type="date" 
              onChange={(e) => setCourse({...course, startDate: e.target.value})}
          />
          
          <label htmlFor="endDate" className="form-label mb-0">End Date</label>
          <input 
              id="endDate"
              value={course.endDate} 
              className="form-control w-50 mb-2" 
              type="date" 
              onChange={(e) => setCourse({...course, endDate: e.target.value})}
          />
          
          <button onClick={addNewCourse} className="btn btn-outline-primary mt-2">Add</button>
          <button onClick={updateCourse} className="btn btn-outline-warning mt-2 ms-2">Update</button>
      </div>


      <div className="inner-dashboard-content ps-4 pt-1">
        <h3>Published Courses</h3>
        <hr></hr>
        <div className="card-container pt-1">
        {courses.map((course) => (
          <div key={course._id} className="">
            <div className="card dashboard-course-card">
              <Link to={`/Kanbas/Courses/${course._id}`} className="card-link">
                <img src="https://media.istockphoto.com/id/1309453432/video/abstract-corporate-blue-motion-background-seamless-looping.jpg?s=640x640&k=20&c=U0O8Zx3QvIQ4Pqm4zFIfuN1ZVScpL9FHF32DCTpqBDY=" alt="generic course image" style={{width: "260px"}}/>
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">{course.number}</p>
                  <p className="card-subtitle text-muted">{course.startDate}, {course.endDate}</p>
                </div>
              </Link>
              <div className="ps-3 pb-3" style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                {/*The edit button basically copies that courses info into the form at the top */}
                <button 
                  className="btn btn-outline-info mb-2"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course)
                  }}>
                  Edit
                </button>
                <button 
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                  className="btn btn-outline-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        </div>
      </div>
    </div>
  ); }
export default Dashboard;