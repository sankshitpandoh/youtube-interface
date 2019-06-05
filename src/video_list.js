import React from 'react';
import VideoListItem from './video_list_item';



const VideoList = (props) =>{
        //instead of for loops try to use map iterators

  const videoItems =   props.videos.map((video)=> {
        return (
          //prop from app passes down to video list item
        <VideoListItem
        onUserSelected={props.onVideoSelect}
        key={video.etag}
        video={video} />
      );
    });

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
