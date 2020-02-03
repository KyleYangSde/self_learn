import React from "react";
import SearchBar from "./searchBar";
import youtube from "../api/youtube";
import VideoList from "./videoList";
import VideoDetail from "./videoDetails";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  /**
   * 第一次渲染完成后 未输入时 默认显示的内容
   */
  componentDidMount() {
    this.onTermSubmit("mother");
  }

  onTermSubmit = async term => {
    //youtube是axios的preconfigured instance；search是end point
    //asynchronus API reques        t
    //await放在request的前面
    const response = await youtube.get("/search", {
      params: {
        //pass our search string
        //q 是youtube api的参数
        q: term
      }
    });
    //in order to interact with it we        have to use a promise/await

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  //video是从api中获得的
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    console.log(video);
  };
  render() {
    return (
      <div className="ui container">
        {/* 每当submit searchbar后 callbackfunction就会被调用 */}
        {/* props的属性名可以和回调函数名相同 */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          {/* render ui row in same line */}
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            {/* 5/16 部分去render videolist */}
            <div className="five wide column">
              <VideoList
                video={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

/**
 * 从子元素向父元素传递时 需要用callback
 */
