import ArrayIndexAndLength from "./ArrayIndexAndLength.js";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays.js";
import ForLoops from "./ForLoops.js";
import MapFunction from "./MapFunction.js";
import JsonStringify from "./JsonStringify.js";
import FindFunction from "./FindFunction.js";
import FindIndex from "./FindIndex.js";
import FilterFunction from "./FilterFunction.js";

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped; let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    let variableArray1 = [functionScoped, blockScoped, constant1, numberArray1, stringArray1];
    return (
        <div>
            <h3>WorkingWithArrays</h3>
            stringArray1 = {stringArray1}<br/>
            variableArray1 = {variableArray1}<br/>
            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays />
            <ForLoops />
            <MapFunction />
            <JsonStringify />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
            
        </div>
    )

}
export default WorkingWithArrays