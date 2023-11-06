import React from "react";
import Add from "./Add.js";
import ClickEvent from "./ClickEvent.js";
import PassingDataOnEvent from "./PassingDataOnEvent.js";
import PassingFunctions from "./PassingFunction.js";
import EventObject from "./EventObject.js";
import Counter from "./Counter.js";
import BooleanStateVariables from "./BooleanStateVariables.js";
import StringStateVariables from "./StringStateVariables.js";
import DateStateVariable from "./DateStateVariable.js";
import ObjectStateVariable from "./ObjectStateVariable.js";
import ArrayStateVariable from "./ArrayStateVariable.js";
import ParentStateComponent from "./ParentStateComponent.js";
import ReduxExamples from "./ReduxExamples/HelloRedux/index.js";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello !!!!!!")
    }
    return (
        <div>
            <h1>Assignment 4</h1>
            <ReduxExamples />
            <br></br>
            <Add a={5} b={2} />
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello}/>
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
        </div>
    );
};

export default Assignment4;