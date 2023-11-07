import React, { useState } from "react";

function WorkingWithObjects() {
    const URL = "http://localhost:4000/a5/assignment";

    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const handleCompletedRadioChange = (event) => {
        setAssignment({ ...assignment, completed: event.target.value === 'true' ? true : false });
    };
    

    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a href="http://localhost:4000/a5/assignment" className="btn btn-primary me-2">
                Get Assignment
            </a>
            <h4>Retrieving Properties</h4>
            <a
                href="http://localhost:4000/a5/assignment/title"
                className="btn btn-primary me-2">
                Get Title
            </a>

            <h4>Modifying Properties</h4>
            <a
                href={`${URL}/title/${assignment.title}`}
                className="btn btn-primary me-2"
            >
                Update Title
            </a>
            <input
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                value={assignment.title}
            />
            

            <h4>Modifying Score</h4>
            <a
                href={`${URL}/score/${assignment.score}`}
                className="btn btn-primary me-2"
            >
                Update Score
            </a>
            <input
                type="number"
                onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value, 10) })}
                value={assignment.score}
            />

            <h4>Modifying Completion Status</h4>
            <div>
                <a
                    href={`${URL}/completed/${assignment.completed}`}
                    className="btn btn-primary me-2"
                >
                    Update Completed Status
                </a>
                
                <input
                    type="radio"
                    id="completedTrue"
                    name="objectCompletedStatus"
                    value="true"
                    checked={assignment.completed === true}
                    onChange={handleCompletedRadioChange}
                />
                <label htmlFor="completedTrue" className="me-2">Completed</label>

                <input
                    type="radio"
                    id="completedFalse"
                    name="objectCompletedStatus"
                    value="false"
                    checked={assignment.completed === false}
                    onChange={handleCompletedRadioChange}
                />
                <label htmlFor="completedFalse">Not Completed</label>
            </div>
            
        </div>
    );
}

export default WorkingWithObjects;
