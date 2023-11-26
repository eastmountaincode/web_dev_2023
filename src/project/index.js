import Signin from "../users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import ProjectNav from "./nav";
import Nav from "../Nav";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";
function Project() {
    
    return (
        <div className="row ps-0 pe-0">
            <Nav />
            <div className="mt-2 row" style={{paddingLeft: "100px"}}>
                <div className="col-3">
                    Nav component
                    <ProjectNav />
                </div>
                <div className="col-9">
                    content
                    <Routes>
                        <Route path="/" element={<Navigate to="/project/home" />} />
                        <Route path="/signin" element={<Signin/>}/>
                        <Route path="/account" element={<Account />} />
                        <Route path="/account/:id" element={<Account />} />
                        <Route path="/admin/users" element={<UserTable/>}/>
                        <Route path="/signup" element={<Signup />} />
                        
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Project;