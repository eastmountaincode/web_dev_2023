import ModuleList from "../Modules/ModuleList.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseStatus from "./CourseStatus/index.js";




function Home() {
    return (
        <div className="container-fluid" style={{padding: "0"}}>
            <div className="row" style={{padding: "0"}}>
                <div className="col-lg-9 col-12 ps-3 pe-3" style={{padding: "0", margin: "0"}}>
                    <ModuleList />
                </div>
                <div className="col-3 d-none d-lg-block" style={{padding: "0", margin: "0"}}>
                    <CourseStatus />
                </div>
            </div>
        </div>
    );
}

export default Home;