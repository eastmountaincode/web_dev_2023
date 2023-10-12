import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaEllipsisV, FaPlus } from 'react-icons/fa';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules.filter((module) => module.course === courseId);

    return (
        <div className="container-fluid">     
            {/* BUTTON AREA   */}
            <div className="row ps-3 pe-3">
                <div className="button-area mb-2">
                    <button type="button" className="btn btn-secondary btn-xx btn-sm float-end ms-2">Collapse All</button>
                    <button type="button" className="btn btn-secondary btn-xx btn-sm float-end ms-2">View Progress</button>
                    <select className="form-select form-select-sm float-end ms-2 btn-xx">
                        <option value="PUBLISH_ALL">Publish All</option>
                        <option value="ANOTHER_OPTION">Another Option</option>
                    </select>
                    <button type="button" className="btn btn-danger btn-xx btn-sm float-end ms-2">
                        <FaPlus style={{marginRight: '4px'}} />Module
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm float-end ms-2">
                        <FaEllipsisV />
                    </button>
                </div>
                <hr></hr>
            </div>
            {/* CONTENT AREA */}
            <div className="row ps-3 pe-3">
                <div className="list-group" style={{padding: "0"}}>
                    {modules.map((module, index) => (
                        <span key={index} className="list-group-item list-group-item-secondary d-flex align-items-center" style={{padding: "15px 10px"}}>
                            
                            <FaGripVertical className="me-1 gray-color" />
                            <span className="no-wrap">{module.name}</span>
                            <span className="ms-auto no-wrap">
                                <FontAwesomeIcon className="ms-3" icon={faCheckCircle} style={{color: "green"}} />


                                <FaPlus className="ms-3 gray-color" style={{marginTop: '-3px'}} />
                                <FaEllipsisV className="ms-2 gray-color" style={{marginTop: '-2px'}} />
                            </span>
                            
                        </span>
                    ))} 
                </div>
            </div>      
        </div>
    ); 
}

export default ModuleList;
