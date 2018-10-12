import React from 'react';

// displays single video, that is passed from the list of video 
const VideoListItem = ({singleVideo}) => {

    const imageUrl = singleVideo.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}></img>
                </div>

                <div className="media-body">
                    <div className="media-heading">{singleVideo.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}


export default VideoListItem;