import {React, useEffect} from "react";
import { useParams } from "react-router-dom";

import { FaGripVertical, FaEllipsisV, FaPlus } from 'react-icons/fa/index.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

import { useDispatch, useSelector } from "react-redux";

import * as modulesReducer from "./reducer.js"
import * as client from "./client.js"

function ModuleList() {
    const dispatch = useDispatch();
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);

    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(modulesReducer.setModules(modules))
        );
    }, [courseId, dispatch]); 

    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
            dispatch(modulesReducer.addModule(module));
        });
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(modulesReducer.deleteModule(moduleId));
        });
    };

    const handleUpdateModule = (moduleId) => {
        console.log('got request to handle update module');
        client.updateModule(moduleId).then((status) => {
            dispatch(modulesReducer.updateModule(moduleId));
        });
    };

    return (
        <div className="container-fluid">     
            {/* BUTTON AREA   */}
            <div className="row ps-4 pe-3">
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
            {/* UPDATE ADD BUTTON AREA */}
            
            <div className="mb-3 p-3 me-1 border" style={{marginLeft: "12px"}}>
                <label htmlFor="moduleName" className="form-label mb-1">Module Name</label>
                <input 
                    type="text"
                    className="form-control"
                    id="moduleName"
                    value={module.name}
                    onChange={(e) => dispatch(modulesReducer.setModule({ ...module, name: e.target.value }))}
                />
                <label htmlFor="moduleDescription" className="form-label mt-2 mb-1">Description</label>
                <textarea 
                    className="form-control"
                    id="moduleDescription"
                    rows="3"
                    value={module.description}
                    onChange={(e) => dispatch(modulesReducer.setModule({ ...module, description: e.target.value }))}
                />
                <div style={{display: "flex", flexDirection: "column", alignItems:"flex-start"}}>
                    <button className="btn btn-success mt-3" onClick={handleAddModule}>Add</button>
                    <button className="btn btn-info mt-2" style={{color: "white"}} onClick={() => handleUpdateModule(module)}>Update</button>
                </div>
            </div>


            {/* CONTENT AREA */}
            <div className="row ps-4 pe-3">
                <div className="list-group" style={{padding: "0"}}>
                    {modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                        <div key={index} className="list-group-item list-group-item-secondary d-flex align-items-center justify-content-between" style={{padding: "15px 10px"}}>
                            <div className="d-flex align-items-center">
                                <FaGripVertical className="me-1 gray-color" />
                                <div className="ms-2" style={{display: "flex", flexDirection: "column"}}>
                                    <span className="h6 mb-1">{module.name}</span>
                                    <span className="text-muted">{module.description}</span>
                                </div>
                            </div>
                            <div className="d-flex ms-2">
                                <button className="btn btn-outline-secondary" onClick={() => dispatch(modulesReducer.setModule(module))}>Edit</button>
                                <button className="btn btn-outline-danger ms-1" onClick={() => handleDeleteModule(module._id)}>Delete</button>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
    
        </div>
    ); 
}

export default ModuleList;
