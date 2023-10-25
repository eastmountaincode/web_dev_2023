import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);

    // These functions are like a wrapper to the setArray function
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };

    const deleteElement = (index) => {
        setArray(array.filter((item, i) => i !== index));
    };

    return (
        <div>
            <h2>Array State Variable</h2>
            <button className="btn btn-success mb-2" onClick={addElement}>Add Element</button>
            <ul className="list-group w-25">
                {array.map((item, index) => (
                    <li className="list-group-item fs-5 fw-bold" key={index}>
                        {item}
                        <button className="btn btn-danger ms-5 float-end" onClick={() => deleteElement(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArrayStateVariable;
