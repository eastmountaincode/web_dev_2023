import { Route, Routes, Navigate } from "react-router";
import './index.css';
import Dashboard from "./Dashboard";
import Account from "./Account";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

function Kanbas() {
  const location = useLocation();
  const isCoursesPage = location.pathname.includes("Courses");

  const [isScreenWidthMdOrLarger, setIsScreenWidthMdOrLarger] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenWidthMdOrLarger(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const hideKanbasNavigation = isCoursesPage && !isScreenWidthMdOrLarger;

  return (
    <div>
      
      {/* Navigation */}
      <div className={`kanbas-nav-container ${hideKanbasNavigation ? "d-none" : "d-md-block"}`}>
        <KanbasNavigation />
      </div>
      
      {/* Main Content */}
      <div className="kanbas-main-content" style={{ marginLeft: hideKanbasNavigation ? '0' : '85px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Account" element={<Account />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default Kanbas;