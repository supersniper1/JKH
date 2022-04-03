import React from 'react';
import './applicationPage.css'
import Application from "../../components/Application";

const ApplicationsPage = () => {
    return (
        <div className="applicationPage">
            <div className="title">
                <h2>Входящие заявки</h2>
            </div>
            <div className="applications">
                <Application/>
                <Application/>
                <Application/>
            </div>
        </div>
    );
};

export default ApplicationsPage;