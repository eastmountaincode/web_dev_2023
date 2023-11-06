import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseDetails from './CourseDetails/index.js';
import SettingsNavigation from './SettingsNavigation/index.js';

function CourseSettings() {
    const [activeTab, setActiveTab] = useState('course-details');

    const handleTabChange = (e, tabName) => {
        e.preventDefault();
        setActiveTab(tabName);
    };

    return (
        <div className="container-fluid mb-4">
            <div className="row">
                <div className="course-module-content col-12">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === 'course-details' ? 'active' : ''}`} onClick={(e) => handleTabChange(e, 'course-details')} href="#course-details">Course Details</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === 'sections' ? 'active' : ''}`} onClick={(e) => handleTabChange(e, 'sections')} href="#sections">Sections</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === 'navigation' ? 'active' : ''}`} onClick={(e) => handleTabChange(e, 'navigation')} href="#navigation">Navigation</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === 'apps' ? 'active' : ''}`} onClick={(e) => handleTabChange(e, 'apps')} href="#apps">Apps</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === 'feature-options' ? 'active' : ''}`} onClick={(e) => handleTabChange(e, 'feature-options')} href="#feature-options">Feature Options</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === 'integrations' ? 'active' : ''}`} onClick={(e) => handleTabChange(e, 'integrations')} href="#integrations">Integrations</a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        {activeTab === 'course-details' && (
                            <div className="tab-pane show active" id="course-details">
                                <div className="container">
                                    <CourseDetails />
                                </div>
                            </div>
                        )}

                        {activeTab === 'navigation' && (
                            <div className="tab-pane show active" id="navigation">
                                <div className='container'>
                                    <SettingsNavigation />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseSettings;

