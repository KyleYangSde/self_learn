import React from "react";
import "./videoItem.css";
import VideoDetail from "./videoDetails";
//video list的作用是video item的外边框 包括主video item

const VideoItem = props => {
  return (
    <div
      className="video-item item"
      //执行带参数的函数 eventhandler需要用箭头函数
      onClick={() => props.onVideoSelect(props.vid)}
    >
      <img
        alt={props.vid.snippet.title}
        src={props.vid.snippet.thumbnails.high.url}
        className="ui image"
      />
      <div className="content">
        <div className="header">{props.vid.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;

/**
 * 在videolist里 click method更改app中的state 通过pass回调函数
 */
