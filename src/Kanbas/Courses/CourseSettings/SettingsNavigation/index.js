function SettingsNavigation() {
    return (
        <div id="navigation" className="tab-pane fade show active">
            <p className="mt-3">Drag and drop items to reorder them in the course navigation.</p>

            <ul className="list-group">
                {["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video"].map(item => (
                    <li className="list-group-item draggable-item">
                        {item}
                        <i className="fa-solid fa-ellipsis-vertical float-end"></i>
                    </li>
                ))}
            </ul>

            <div className="mt-3">
                <p>Drag items here to hide them from students.</p>
                <p>Disabling most pages will cause students who visit those pages to be redirected to the course home page.</p>
            </div>

            <ul className="list-group">
                {[
                    "Chat", "SCORM", "Attendance", "Barnes and Noble bookstore", "Digication", "Top Hat", "Syllabus", "Perusall", 
                    "Microsoft Teams Meetings", "FACT Reporting and Photo Roster", "Progress Reports (Navigate)", "Microsoft Teams for Canvas", 
                    "VHL Central", "Gradescope 1.3", "Credentials", "iClicker"
                ].map(item => (
                    <li className="list-group-item draggable-item">
                        {item}
                        <i className="fa-solid fa-ellipsis-vertical float-end"></i>
                        <br />
                        <small>Page disabled, won't appear in navigation</small>
                    </li>
                ))}
            </ul>

            <a href="#">
                <button type="button" className="btn btn-danger mt-3">Save</button>
            </a>
        </div>

    );
}
export default SettingsNavigation