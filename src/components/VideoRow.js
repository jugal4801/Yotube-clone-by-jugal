import React from 'react';
import './videorow.css';
const VideoRow = ({ views, subs, description, timestamps, channel, title, image }) => {
    return (
        <div className="videorow">
            <img src={image} alt="" />
            <div className="videorow_text">
                <h3>{title}</h3>
                <p className="videorow_headline">
                    {channel} .{""}
                    <span className="videorow_subs">
                    <span className="videorow_subsnum">  {subs}</span> Subscribers </span>{""} {views} views . {timestamps}
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
