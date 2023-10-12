import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faEllipsisV, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { Typeahead } from "react-bootstrap-typeahead";
import 'react-bootstrap-typeahead/css/Typeahead.css';


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();

    const handleSave = () => {
        console.log("Saving assignment.");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="container-fluid">
            {/* BUTTON AREA */}
            <div className="row">
                <div class="button-area d-flex align-items-center pb-2">                                        
                    <div class="float-end">
                        <span className="me-2" style={{color: "green"}}>
                            <FontAwesomeIcon icon={faCircleCheck} className="me-1"/>
                            <i class="fa-solid fa-square-check"></i>
                            Published
                        </span>
                        <button type="button" class="btn btn-secondary btn-sm ms-2">
                            <FontAwesomeIcon icon={faEllipsisV} />
                        </button>
                    </div>
                </div>
                <hr></hr>
            </div>

            {/* CONTENT AREA */}
            <div className="row">
                <div className="mb-3">
                    <label htmlFor="assignmentName" className="col-form-label text-end">Assignment Name</label>
                    <div>
                        <input type="text" className="form-control" id="assignmentName" defaultValue={assignment.title} />
                    </div>
                </div>

                <div className="mb-3">
                    <textarea className="form-control" id="description" rows="4" defaultValue="default assignment description"></textarea>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">

                            {/* POINTS */}
                            <div className="mb-3 row">
                                <label htmlFor="points" className="col-sm-4 col-form-label text-end">Points</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="points" defaultValue="100" />
                                </div>
                            </div>

                            {/* ASSIGNMENT GROUP */}
                            <div className="mb-3 row">
                                <label htmlFor="assignmentGroup" className="col-sm-4 col-form-label text-end">Assignment Group</label>
                                <div className="col-sm-8">
                                    <select className="form-select" id="assignmentGroup">
                                        <option selected>ASSIGNMENTS</option>
                                    </select>
                                </div>
                            </div>

                            {/* DISPLAY GRADE AS */}
                            <div className="mb-3 row">
                                <label htmlFor="displayGradeAs" className="col-sm-4 col-form-label text-end">Display Grade as</label>
                                <div className="col-sm-8">
                                    <select className="form-select" id="displayGradeAs">
                                        <option selected>Percentage</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3 row align-items-center">
                                <div className="col-sm-5 text-end">
                                    <input type="checkbox" className="form-check-input" id="excludeFromFinalGrade" />
                                </div>
                                <label className="col-sm-6 form-check-label" htmlFor="excludeFromFinalGrade">
                                    Do not count this assignment towards the final grade
                                </label>
                            </div>

                            {/* SUBMISSION TYPE */}
                            <div className="mb-3 row">
                                <label htmlFor="submissionType" className="col-sm-4 col-form-label text-end">Submission Type</label>
                                <div className="col-sm-8">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="mb-3 row">
                                                <div className="col-sm-12">
                                                    <select className="form-select" id="submissionType">
                                                        <option selected>Online</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="fw-bold mb-4">Online Entry Options</span>
                                                <div>
                                                    <div>
                                                        <div className="form-check mb-1">
                                                            <input className="form-check-input" type="checkbox" value="textEntry" id="textEntry" defaultChecked />
                                                            <label className="form-check-label" htmlFor="textEntry">Text Entry</label>
                                                        </div>
                                                        <div className="form-check mb-1">
                                                            <input className="form-check-input" type="checkbox" value="websiteURL" id="websiteURL" defaultChecked />
                                                            <label className="form-check-label" htmlFor="websiteURL">Website URL</label>
                                                        </div>
                                                        <div className="form-check mb-1">
                                                            <input className="form-check-input" type="checkbox" value="mediaRecordings" id="mediaRecordings" defaultChecked />
                                                            <label className="form-check-label" htmlFor="mediaRecordings">Media Recordings</label>
                                                        </div>
                                                        <div className="form-check mb-1">
                                                            <input className="form-check-input" type="checkbox" value="studentAnnotation" id="studentAnnotation" />
                                                            <label className="form-check-label" htmlFor="studentAnnotation">Student Annotation</label>
                                                        </div>
                                                        <div className="form-check mb-1">
                                                            <input className="form-check-input" type="checkbox" value="fileUploads" id="fileUploads" />
                                                            <label className="form-check-label" htmlFor="fileUploads">File Uploads</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ASSIGN TO */}
                            <div className="mb-3 row">
                                <label className="col-sm-4 col-form-label text-end">Assign</label>
                                <div className="col-sm-8">
                                    <div className="card">
                                        <div className="card-body">

                                            {/* Assign to */}
                                            <div className="mb-3">
                                                <label htmlFor="assignTo">Assign to</label>
                                                <Typeahead
                                                    id="assignTo"
                                                    multiple
                                                    allowNew
                                                    onChange={(selected) => {
                                                    }}
                                                    options={[
                                                        'Everyone', 
                                                        'Someone else'
                                                    ]}
                                                    placeholder="Assign to"
                                                />
                                            </div>

                                            {/* Due Date */}
                                            <div className="mb-3">
                                                <label htmlFor="dueDate">Due</label>
                                                <input type="date" className="form-control" id="dueDate" />
                                            </div>

                                            {/* Available From and Until Dates */}
                                            <div className="mb-3 row align-items-center " style={{padding: "0"}}>
                                                <div className="col-6">
                                                    <label htmlFor="availableFrom">Available from</label>
                                                    <input type="date" className="form-control" id="availableFrom" />
                                                </div>
                                                <div className="col-6" >
                                                    <label htmlFor="availableUntil">Until</label>
                                                    <input type="date" className="form-control" id="availableUntil" />
                                                </div>
                                            </div>

                                            {/* Add Button */}
                                            <button className="btn btn-primary w-100" type="button">
                                                <FontAwesomeIcon icon={faPlus} className="me-2" /> Add
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <hr></hr>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* Checkbox and Label */}
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="notifyCheckbox" />
                        <label className="form-check-label" htmlFor="notifyCheckbox">
                            Notify users that this content has changed
                        </label>
                    </div>
                    
                    {/* Cancel and Save Buttons */}
                    <div>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-outline-secondary me-2">
                            Cancel
                        </Link>
                        <button onClick={handleSave} className="btn btn-danger">
                            Save
                        </button>
                    </div>
                </div>


            </div>
        </div>
    ); 
}

export default AssignmentEditor;