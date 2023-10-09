import { Route, Routes, Navigate } from "react-router";
import './index.css';
import Dashboard from "./Dashboard";
import Account from "./Account";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";

import 'bootstrap/dist/css/bootstrap.min.css';

function Kanbas() {
  return (
    <div>
      
      {/* Navigation */}
      <div className="kanbas-nav-container">
        <KanbasNavigation />
      </div>
      
      {/* Main Content */}
      <div className="kanbas-main-content">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Account" element={<Account />} />
          <Route path="Courses" element={<Courses />} />
        </Routes>
      </div>
      
    </div>
  );
}

  export default Kanbas;