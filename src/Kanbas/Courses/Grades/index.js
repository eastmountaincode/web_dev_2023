import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import db from "../../../Database/index.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFileImport, faFileExport, faCog, faFilter } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as assignmentsReducer from '../Assignments/reducer.js';
import * as assignmentsClient from '../Assignments/client.js';

function Grades() {
    const { courseId } = useParams();
    const dispatch = useDispatch();

    const allAssignments = useSelector((state) => state.assignmentsReducer.assignments);
    useEffect(() => {
        assignmentsClient.getAssignments(courseId)
            .then((assignmentsFromServer) =>
                dispatch(assignmentsReducer.setAssignments(assignmentsFromServer))
            );
    }, [courseId, dispatch]);

    const assignments = allAssignments.filter((assignment) => assignment.course === courseId);



    const users = db.users;
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    const grades = db.grades;

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="course-module-content col-12">
                    <div className="button-area d-flex align-items-center justify-content-end">
                        <button type="button" className="btn btn-secondary me-2">
                            <FontAwesomeIcon icon={faFileImport} /> Import
                        </button>

                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle me-2" type="button" id="exportDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faFileExport} /> Export
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="exportDropdown">
                                <li><a className="dropdown-item" href="#">Option 1</a></li>
                                <li><a className="dropdown-item" href="#">Option 2</a></li>
                                <li><a className="dropdown-item" href="#">Option 3</a></li>
                            </ul>
                        </div>

                        <button type="button" className="btn btn-secondary me-2">
                            <FontAwesomeIcon icon={faCog} />
                        </button>
                    </div>
                    <hr />

                    <div className="row" style={{padding: "0"}}>
                        <div className="col-6">
                            <label htmlFor="studentNames">Student Names</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faSearch} />
                                </span>
                                <input type="text" className="form-control" id="studentNames" placeholder="Search for a student" aria-label="Search for a student" aria-describedby="studentDropdown" />
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="studentDropdown" data-bs-toggle="dropdown" aria-expanded="false"></button>
                            </div>
                        </div>

                        <div className="col-6">
                            <label htmlFor="assignmentNames">Assignment Names</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faSearch} />
                                </span>
                                <input type="text" className="form-control" id="assignmentNames" placeholder="Search Assignments" aria-label="Search for an assignment" aria-describedby="assignmentDropdown" />
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="assignmentDropdown" data-bs-toggle="dropdown" aria-expanded="false"></button>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{padding: "0"}}>
                        <div className="">
                            <button className="btn btn-outline-secondary">
                                <FontAwesomeIcon icon={faFilter} /> Apply Filters
                            </button>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-striped table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>Student Name</th>
                                    {assignments.map((assignment) => (<th key={assignment._id}>{assignment.title}</th>))}
                                </tr>
                            </thead>
                            <tbody>
                                {enrollments.map((enrollment) => {
                                    const user = users.find((user) => user._id === enrollment.user);
                                    return (
                                        <tr key={user._id}>
                                            <td>{user.firstName} {user.lastName}</td>
                                            {assignments.map((assignment) => {
                                                const grade = grades.find(
                                                    (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                                                );
                                                return (
                                                    <td key={assignment._id}>{grade?.grade || ""}</td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Grades