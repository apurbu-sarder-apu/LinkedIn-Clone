import React from 'react'
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    );

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("PURBO react is back", "Top news - 9099 readers")}

            {newsArticle("CoronaVirus UK updates", "Top news - 889 readers")}

            {newsArticle("Python Django coming soon", "Top news - 9099 readers")}

            {newsArticle("CoronaVirus Bd updates", "Top news - 889 readers")}

        </div>
    );
}

export default Widgets;