import React from 'react';
import Slides from './Slides';
import Header from './Header';


function Dashboard () {

    return (
        <div className="dashboard">
            <Header />
            <Slides />
        </div>
    );
};

export default Dashboard;