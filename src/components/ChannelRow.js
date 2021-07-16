import React from 'react'
import './channelrow.css'
import { Avatar } from '@material-ui/core'
import { CheckCircleOutline } from '@material-ui/icons'
const ChannelRow = ({ image, channel, noOfVideos, subs, description, verified }) => {
    return (
        <div className="channelrow">
            <Avatar className="channelrow_logo"
                alt={channel}
                src={image} />
            <div className="channelrow_text">
                <h4 >
                    {channel}

                    < CheckCircleOutline />
                </h4>
                <p>{subs} subscribers . {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
