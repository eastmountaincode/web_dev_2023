import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import './index.css';
import Dashboard from "./Dashboard";

function Kanbas() {
    return (
      <div className="d-flex kanbas-container">
        <div className="kanbas-nav-container">
          <KanbasNavigation />
        </div>
        <div className="kanbas-inner-content">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />}></Route>
            <Route path="Dashboard" element={<Dashboard />}></Route>
          </Routes>
        </div>
        
      </div>
  ); }
  export default Kanbas;