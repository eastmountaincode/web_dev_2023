import { faBan, faSquareCheck, faFileExport, faBullseye, faChartSimple, faScroll, faBell, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function CourseStatus() {
    return (
        <div className="container">
            <span className="font-weight-bold">Course Status</span>
            <div className="d-flex mb-3 right-button-area">
                <button type="button" className="btn btn-outline-secondary mr-2 btn-sm">
                    <FontAwesomeIcon icon={faBan} style={{marginRight: '5px'}} />Unpublished
                </button>
                <button type="button" className="btn btn-success btn-sm">
                    <FontAwesomeIcon icon={faSquareCheck} style={{marginRight: '5px'}} />Published
                </button>
            </div>
            <div className="mb-4 right-button-area">
                <button type="button" className="btn btn-outline-secondary mb-2 w-100 btn-sm">
                    <FontAwesomeIcon icon={faFileExport} style={{marginRight: '5px'}} />Import Existing Content
                </button>
                <button type="button" className="btn btn-outline-secondary mb-2 w-100 btn-sm">
                    <FontAwesomeIcon icon={faScroll} style={{marginRight: '5px'}} />Import From Commons
                </button>
                <button type="button" className="btn btn-outline-secondary mb-2 w-100 btn-sm">
                    <FontAwesomeIcon icon={faBullseye} style={{marginRight: '5px'}} />Choose Home Page
                </button>
                <button type="button" className="btn btn-outline-secondary mb-2 w-100 btn-sm">
                    <FontAwesomeIcon icon={faChartSimple} style={{marginRight: '5px'}} />View Course Stream
                </button>
                <button type="button" className="btn btn-outline-secondary mb-2 w-100 btn-sm">
                    <FontAwesomeIcon icon={faScroll} style={{marginRight: '5px'}} />New Announcement
                </button>
                <button type="button" className="btn btn-outline-secondary mb-2 w-100 btn-sm">
                    <FontAwesomeIcon icon={faChartSimple} style={{marginRight: '5px'}} />New Analytics
                </button>
                <button type="button" className="btn btn-outline-secondary mb-2 w-100 btn-sm">
                    <FontAwesomeIcon icon={faBell} style={{marginRight: '5px'}} />View Course Notifications
                </button>
            </div>
            <div className="d-flex justify-content-between mb-3">
                <span className="float-left mr-3">To Do</span>                                            
            </div>
            <hr />
            <ul className="list-unstyled">
                <li>
                    <div>
                        <a href="#" className="text-decoration-none red-link">Grade A1 - ENV + HTML</a>
                        <div className="subtitle">100 points Sep 18 at 11:59pm</div>
                    </div>
                </li>
            </ul>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <span className="mr-3">Coming Up</span>
                <a href="#" className="text-decoration-none red-link" style={{fontSize: 'small'}}>
                    <FontAwesomeIcon icon={faCalendar} style={{marginRight: '5px'}} />View Calendar
                </a>
            </div>
            <hr />
            <ul className="list-unstyled">
                <li className="mb-2">
                    <div className="row d-flex">
                        <div className="col-auto">
                            <FontAwesomeIcon icon={faCalendar} />
                        </div>
                        <div className="col">
                            <a href="#" className="text-decoration-none red-link">Lecture</a>
                            <div className="subtitle">CS4550.12631.202410</div>
                            <div className="subtitle">Sep 11 at 11:45am</div>
                        </div>
                    </div>
                </li>
                <li className="mb-2">
                    <div className="row d-flex">
                        <div className="col-auto">
                            <FontAwesomeIcon icon={faCalendar} />
                        </div>
                        <div className="col">
                            <a href="#" className="text-decoration-none red-link">CS5610 06 SP23 Lecture</a>
                            <div className="subtitle">CS4550.12631.202410</div>
                            <div className="subtitle">Sep 11 at 6pm</div>
                        </div>
                    </div>
                </li>
                <li className="mb-2">
                    <div className="row d-flex">
                        <div className="col-auto">
                            <FontAwesomeIcon icon={faCalendar} />
                        </div>
                        <div className="col">
                            <a href="#" className="text-decoration-none red-link">CS5610 Web Development Summer 1 2023 - LECTURE</a>
                            <div className="subtitle">CS4550.12631.202410</div>
                            <div className="subtitle">Sep 11 at 7pm</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default CourseStatus