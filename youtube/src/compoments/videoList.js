import React from "react";
import VideoItem from "./videoItem";
//video list的作用是video item的外边框 包括主video item

const VideoList = props => {
  /**
   * 新生成的是renderList对每个元素渲染
   * map function
   * 每一个video
   */
  const renderList = props.video.map(vid => {
    return (
      <VideoItem
        key={vid.id.videoId}
        vid={vid}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
