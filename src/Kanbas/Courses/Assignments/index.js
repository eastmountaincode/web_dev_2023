import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGripVertical, FaChevronDown, FaPlus, FaEllipsisV } from 'react-icons/fa/index.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import "./index.css"
import { useSelector, useDispatch } from "react-redux";

import { setAssignments, deleteAssignment as deleteAssignmentRedux } from "./reducer.js"; 
import { getAssignments, deleteAssignment } from "./client.js";



function Assignments() {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);


    useEffect(() => {
        getAssignments(courseId)
            .then((assignments) =>
                dispatch(setAssignments(assignments))
            );
    }, [courseId, dispatch]);

    const handleAddAssignment = () => {
        console.log("Add button clicked");
        navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
    };

    const handleDeleteClick = async (assignmentId) => {
        try {
            await deleteAssignment(assignmentId);
            dispatch(deleteAssignmentRedux(assignmentId));
        } catch (error) {
            console.error('Failed to delete assignment:', error);
        }
    };

    return (
        <div className="container-fluid p-3" style={{padding: "0"}}>
            <div>
                <div className="row" style={{padding: "0"}}>
                    <div className="button-area d-flex justify-content-between align-items-center mb-2">
                        <input 
                            type="text" 
                            className="form-control form-control-sm assignment_search_input w-25" 
                            id="assignment_search" 
                            placeholder="Search for Assignment"
                        />
                    
                        <div className="d-flex">
                            <button type="button" className="btn btn-secondary btn-xx btn-sm ms-2">
                                <FaPlus style={{marginRight: '4px'}} />Group
                            </button>
                            <button type="button" className="btn btn-danger btn-xx btn-sm ms-2" onClick={handleAddAssignment}>
                                <FaPlus style={{marginRight: '4px'}} />Assignment
                            </button>
                            <button type="button" className="btn btn-secondary btn-sm ms-2">
                                <FaEllipsisV />
                            </button>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <div className="row" style={{padding: "0"}}>
                    <div className="list-group" style={{borderRadius : "0", padding: "0"}}>
                        <span className="list-group-item list-group-item-secondary d-flex align-items-center justify-content-between p-2">
                            <div className="d-flex align-items-center">
                                <FaGripVertical className="me-2" />
                                <button className="btn btn-sm me-2"><FaChevronDown /></button>
                                Assignments
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="rounded-rectangle">
                                    40% of the Total
                                </div>
                                <FaPlus className="ms-3" style={{marginTop: '4px'}} />
                                <FaEllipsisV className="ms-3" style={{marginTop: '4px'}} />
                            </div>
                        </span>

                        <div className="list-group" style={{borderLeft: '4px solid green', borderRadius: "0"}}>
                            {assignments
                                .filter(assignment => assignment.course === courseId)
                                .map((assignment) => (
                                    <div 
                                        key={assignment._id} 
                                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between p-2"
                                        >
                                        
                                        {/* Assignment details as a clickable link */}
                                        <Link
                                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                            className="d-flex align-items-center flex-grow-1"
                                            style={{textDecoration: "none", color: "inherit"}}>
                                            <FaGripVertical className="me-2" />
                                            <FontAwesomeIcon icon={faPenToSquare} className="me-2" style={{color: 'green'}} />
                                            <div className="ms-2">
                                                {assignment.title}
                                                <div className="subtitle d-flex flex-column">
                                                    <span>Week: {assignment.week}</span>
                                                    <span>Due: {assignment.dueDate}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    
                                        {/* Separate delete button outside the Link */}
                                        <button 
                                            className="btn btn-outline-danger me-2 btn-sm"
                                            onClick={(e) => {
                                                e.preventDefault();  // Prevent any default behavior
                                                handleDeleteClick(assignment._id);
                                            }}
                                            >Delete
                                        </button>
                                    </div>    
                            ))}
 
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}
export default Assignments;