import React from "react"; 
import ConditionalOutputIfElse from "./ConditionalOutputIfElse.js"; 
import ConditionalOutputInline from "./ConditionalOutputInline.js"; 
const ConditionalOutput = () => {
    return( 
        <>
            <ConditionalOutputIfElse/>
            <ConditionalOutputInline/> 
        </>
    ); 
};
export default ConditionalOutput;