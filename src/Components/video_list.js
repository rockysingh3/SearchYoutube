import React from 'react';
import VideoListItem from './video_listItem';


// displays list of all the videos 

const VideoList = (props) => {

    //console.log(props.videos);
    const singleVideo = props.videos.map((singleVideo) => {
        return <VideoListItem key={singleVideo.etag} singleVideo={singleVideo}/>
    });

    return (
        <ul className="col-md-4 list-group">
            {singleVideo}
        </ul>
    );

}

export default VideoList;