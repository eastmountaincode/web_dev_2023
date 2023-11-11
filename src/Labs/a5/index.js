import EncodingParametersInURLs from "./EncodingParametersInURLs.js"
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";

function Assignment5() {
    const A5_BASE = process.env.REACT_APP_A5_BASE;
    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href={`${A5_BASE}/welcome`} className="list-group-item">
                    Welcome
                </a>
            </div>
            <EncodingParametersInURLs />
            <WorkingWithObjects />
            <WorkingWithArrays />
        </div>
    );
}
export default Assignment5;

