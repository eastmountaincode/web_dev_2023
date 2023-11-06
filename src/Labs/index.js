import { Provider } from "react-redux";
import Nav from "../Nav.js";
import Assignment3 from "./a3/index.js";
import Assignment4 from "./a4/index.js";
import Assignment5 from "./a5/index.js";
import { Routes, Route, Navigate } from "react-router";
import store from "./store/index.js";


function Labs() {
    return (
        <Provider store = {store}>
            <div>
                <Nav />
                <Routes>
                    <Route path="/" element={<Navigate to="a3" />} />
                    <Route path="a3" element={<Assignment3 />} />
                    <Route path="a4" element={<Assignment4 />} />
                    <Route path="a5" element={<Assignment5 />} />
                </Routes>
            </div>
        </Provider>
    );
}

export default Labs;
