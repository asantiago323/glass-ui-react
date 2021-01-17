import React from 'react';
import "./Dashboard.css";

import Games from './Games/Games';

export const Dashboard = () => {
    let dashboard = (
        <div className="dashboard">
        {/* left section */}
        <div className="leftSection">
            {/* user */}
            <div className="user">
                <img src="/images/avatar.png" alt="" />
                <h3>ME DUDE!</h3>
                <p>Pro Member</p>
            </div>
            {/* links */}
            <div className="links">
                <div className="link">
                    <img src="images/twitch.png" alt="" />
                    <h2>Streams</h2>
                </div>
                <div className="link">
                    <img src="/images/steam.png" alt="" />
                    <h2>Games</h2>
                </div>
                <div className="link">
                    <img src="/images/upcoming.png" alt="" />
                    <h2>New</h2>
                </div>
                <div className="link">
                    <img src="/images/library.png" alt="" />
                    <h2>Library</h2>
                </div>
            </div>
            <div className="pro">
                <h2>Join pro for free games.</h2>
                <img src="/images/controller.png" alt="" />
            </div>
        </div>

        
        {/* right section */}
        <div className="gamesSection">
            <Games />
        </div>
    </div>
    );
    return dashboard;
}

export default Dashboard;