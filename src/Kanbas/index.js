import { Route, Routes, Navigate } from "react-router";
import './index.css';
import Dashboard from "./Dashboard";
import Account from "./Account";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

import db from "./Database";

import store from "./store";
import { Provider } from "react-redux";

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

    // STATE STUFF BELOW

    const [courses, setCourses] = useState(db.courses);

    // course object with default values
    const [course, setCourse] = useState({
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2024-1-15"
    });

    const addNewCourse = () => {
        // the existing courses...
        setCourses([...courses,
            // ...plus the new course with time as id
            {...course, _id: new Date().getTime() }
        ])
    }

    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId))
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        )
    }

    return (
        <Provider store={store}>
            <div>
                {/* Navigation */}
                <div className={`kanbas-nav-container ${hideKanbasNavigation ? "d-none" : "d-md-block"}`}>
                    <KanbasNavigation />
                </div>
                {/* Main Content */}
                <div className="kanbas-main-content" style={{ marginLeft: hideKanbasNavigation ? '0' : '85px' }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Dashboard" element={<Dashboard 
                                                            courses={courses}
                                                            course={course}
                                                            setCourse={setCourse}
                                                            addNewCourse={addNewCourse}
                                                            deleteCourse={deleteCourse}
                                                            updateCourse={updateCourse}/>} />
                        <Route path="Account" element={<Account />} />
                        <Route path="Courses/:courseId/*" element={<Courses 
                                                                      courses={courses}/>} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Kanbas;
