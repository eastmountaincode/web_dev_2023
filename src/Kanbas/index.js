import { Route, Routes, Navigate } from "react-router";
import './index.css';
import Dashboard from "./Dashboard/index.js";
import Account from "./Account/index.js";
import KanbasNavigation from "./KanbasNavigation/index.js";
import Courses from "./Courses/index.js";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

import store from "./store/index.js";
import { Provider } from "react-redux";

function Kanbas() {
    const location = useLocation();
    const isCoursesPage = location.pathname.includes("Courses");

    const [isScreenWidthMdOrLarger, setIsScreenWidthMdOrLarger] = useState(window.innerWidth >= 768);
    const URL = "http://localhost:4000/api/courses";

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

    const [courses, setCourses] = useState([]);

    const initialCourseState = {
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2024-01-15",
        _id: ""
    }

    // course object with default values
    const [course, setCourse] = useState(initialCourseState);

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
            ...courses,
            response.data
        ]);
        setCourse(initialCourseState);
        
    };

    const deleteCourse = async (course_id) => {
        const response = await axios.delete(`${URL}/${course_id}`)
        setCourses(courses.filter((c) => c._id !== course_id));
    }

    const updateCourse = async () => {
        const response = await axios.put(`${URL}/${course._id}`, course);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return response.data;
                }
                return c;
            })
        );
        setCourse(initialCourseState);
    };

    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };

    useEffect(() => {
        findAllCourses();
    }, []);

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
