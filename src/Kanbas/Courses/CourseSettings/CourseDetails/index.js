import { useParams } from "react-router-dom";
import db from "../../../Database/index.js";


function CourseDetails() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div id="course-details" className="tab-pane fade show active">
            <h4 className="mt-3 mb-4">Course Details</h4>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-4 d-flex align-items-center">
                        <strong>Image:</strong>
                    </div>
                    <div className="col-8">
                        <label className="btn btn-outline-secondary w-100 p-5 d-flex justify-content-center align-items-center" style={{ borderRadius: 0, boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                            Choose Image
                            <input type="file" className="d-none" />
                        </label>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 d-flex align-items-center">
                        <strong>Name:</strong>
                    </div>
                    <div className="col-8">
                        {course.name}.{course.number}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 d-flex align-items-center">
                        <strong>Blueprint Course:</strong>
                    </div>
                    <div className="col-8">
                        <select className="form-select">
                            <option value="YES">Yes</option>
                            <option value="NO">No</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4">
                        <strong>Course Template:</strong>
                    </div>
                    <div className="col-8">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Enable" name="enable_course_as_template" id="checkbox_template" />
                            <label className="form-check-label" htmlFor="checkbox_template">
                                Enable course as a Course Template
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4">
                        <strong>Time Zone:</strong>
                    </div>
                    <div className="col-8">
                        <select className="form-select" name="select_time_zone" id="select_time_zone">
                            <option value="EASTERN_TIME">Eastern Time(US & Canada) (-05:00/-04:00)</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4">
                        <strong>SIS ID:</strong>
                    </div>
                    <div className="col-8">
                        CS4550.12631.202410
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4">
                        <strong>Subaccount:</strong>
                    </div>
                    <div className="col-8">
                        <a href="#" className="red-link" style={{ textDecoration: 'none' }}>CS Undergrad</a>
                    </div>
                </div>

                <div className="row mb-3 align-items-center">
                    <div className="col-4">
                        <strong>Term:</strong>
                    </div>
                    <div className="col-8">
                        202410_1 Fall 2023 Semester Full Term
                    </div>
                </div>

                <div className="row mb-3 align-items-center">
                    <div className="col-4">
                        <strong>Participation:</strong>
                    </div>
                    <div className="col-8">
                        <select className="form-select mb-2" name="select_participation" id="select_participation">
                            <option value="TERM">Term</option>
                        </select>
                        Course participation is limited to <strong>term</strong> start and end dates.
                        <div className="mt-2">
                            <label htmlFor="participation_start">Start:</label>
                            <input type="date" id="participation_start_input" />
                        </div>
                        <div className="mt-2">
                            <label htmlFor="participation_end">End:</label>
                            <input type="date" id="participation_end_input" />
                        </div>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="checkbox" name="restrict_view_start" id="restrict_view_start" />
                            <label className="form-check-label" htmlFor="restrict_view_start">
                                Restrict students from view course before term start date
                            </label>
                        </div>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="checkbox" name="restrict_view_end" id="restrict_view_end" />
                            <label className="form-check-label" htmlFor="restrict_view_end">
                                Restrict students from view course before term end date
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 align-items-center">
                    <div className="col-4">
                        <strong>Default due time:</strong>
                    </div>
                    <div className="col-8">
                        <select className="form-select" name="default_due_time" id="default_due_time">
                            <option value="ACCOUNT_DEFAULT">Account default (11:59pm)</option>
                        </select>
                        <small className="text-muted">
                            This influences the user interface for setting due dates. It does not change the time due for any existing assignments.
                        </small>
                    </div>
                </div>

                <div className="row mb-3 align-items-center">
                    <div className="col-4">
                        <strong>Language:</strong>
                    </div>
                    <div className="col-8">
                        <select className="form-select" name="language_select" id="language_select">
                            <option value="NOT_SET">Not set (user-configureable, defaults to English)</option>
                        </select>
                        <small className="text-muted">
                            This will override any user/system language preferences. This is only recommended for foreign language courses.
                        </small>
                    </div>
                </div>

                <div className="row align-items-center mb-3">
                    <div className="col-4">
                        <strong>File Storage:</strong>
                    </div>
                    <div className="col-8">
                        10000 megabytes
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4">
                        <strong>Large Course:</strong>
                    </div>
                    <div className="col-8">
                        <input type="checkbox" name="large_course_checkbox" id="large_course_checkbox" />
                        <label htmlFor="large_course_checkbox">Launch SpeedGrader Filtered by Student Group</label>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4">
                        <strong>Grading Scheme:</strong>
                    </div>
                    <div className="col-8">
                        <input type="checkbox" name="grading_scheme_checkbox" id="grading_scheme_checkbox" />
                        <label htmlFor="grading_scheme_checkbox">Enable course grading scheme</label>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4">
                        <strong>License:</strong>
                    </div>
                    <div className="col-8">
                        <select name="select_license" id="select_license" className="form-select">
                            <option value="PRIVATE">Private (Copyrighted)</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4">
                        <strong>File Copyright:</strong>
                    </div>
                    <div className="col-8">
                        <input type="checkbox" name="copyright_checkbox" id="copyright_checkbox" />
                        <label htmlFor="copyright_checkbox">Copyright and license information must be provided for files before they are published</label>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4">
                        <strong>Visibility:</strong>
                    </div>
                    <div className="col-8">
                        If you need to make your course public please contact your administrator/support.
                        <br />
                        <select name="select_visibility" id="select_visibility" className="form-select mt-2">
                            <option value="COURSE">Course</option>
                        </select>
                        <input type="checkbox" name="visibility_checkbox" id="visibility_checkbox" className="mt-3" />
                        <label htmlFor="visibility_checkbox">Include this course in the public course index</label>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4">
                        <strong>Format:</strong>
                    </div>
                    <div className="col-8">
                        <select name="format_select" id="format_select" className="form-select">
                            <option value="ON_CAMPUS">On-Campus</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4">
                        <strong>Mastery Paths:</strong>
                    </div>
                    <div className="col-8">
                        <input type="checkbox" name="mastery_paths_checkbox" id="mastery_paths_checkbox" />
                        <label htmlFor="mastery_paths_checkbox">Enable individual learning paths for students based on assessment</label>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4">
                        <strong>Description:</strong>
                    </div>
                    <div className="col-8">
                        <form id="course_details_description">
                            <textarea cols="30" rows="6" className="form-control"></textarea>
                        </form>
                        <a href="#" className="mt-2 d-block red-link" style={{ textDecoration: 'none' }}>more options</a>
                    </div>
                </div>
            </div>
            <hr />
            <button type="button" className="btn btn-danger float-end">Update Course Details</button>
        </div>

        
    );
}
export default CourseDetails