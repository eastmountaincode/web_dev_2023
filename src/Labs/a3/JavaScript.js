import VariableTypes from "./VariableTypes.js"
import VariablesAndConstants from "./VariablesAndConstants.js"
import BooleanVariables from "./BooleanVariables.js"
import IfElse from "./IfElse.js"
import TernaryOperator from "./TernaryOperator.js"
import WorkingWithFunctions from "./WorkingWithFunctions.js"
import WorkingWithArrays from "./WorkingWithArrays.js"
import TemplateLiterals from "./TemplateLiterals.js"
import House from "./House.js"
import Spread from "./Spread.js"
import Destructing from "./Destructing.js"
import FunctionDestructing from "./FunctionDestructing.js"
import PathParameters from "./PathParameters.js"

function JavaScript() {
    console.log('Hello World!')
    return (
        <div>
            <h1>Javascript</h1>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <WorkingWithFunctions />
            <WorkingWithArrays />
            <TemplateLiterals />
            <House />
            <Spread />
            <Destructing />
            <FunctionDestructing />
            <PathParameters />
        </div>
    )
}
export default JavaScript