import { Avatar } from '@material-ui/core'
import React from 'react'
import './videoCard.css'
//import { Avatar } from '@material-ui/core';

function VideoCard({ thumbnail, channel, img, description, views, timestamp }) {
    return (
        <div className='videoCard'>
            <img alt={channel} src={thumbnail} className='thumbnail' />

            <div className='card__info'>
                <Avatar alt={channel} src={img} />
                <div className='items'>
                <h4>{description}</h4>
                <p>{channel}</p>
                <p>{views} . {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
