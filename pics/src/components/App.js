import React from "react";
import ImageList from "./imageList.js";
import SearchBar from "./SearchBar.js";
import unsplash from "../api/unsplash.js";
/**
 * unsplash api: pictures master
 * axios 3rd party package
 * fetch function:built into modern browsers 代码数量少 底层 但是会重复使用 没有axios好
 */
class App extends React.Component {
  //can be use with map keyword
  state = { images: [] };
  //callback function
  onSearchSubmit = async term => {
    //first argument is the url/address we want a request to
    //second argument is the object can custimize the request
    //async need time to get response back 当得到图片的时候 要退出method 找到一个程序出口时间点
    /**
     * promise会给我们request完成是的信息
     * .then再将来会被调用 一般是箭头函数 里面放的是回调函数 会被调用
     *  then((response) => {}
     *  第二个方法 在function前加async await
     */
    const response = await unsplash.get("search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui conta  iner" style={{ marginTop: "10 px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found:{this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

/**
 * eventhandler callback
 * when meet that event,callback function will be called
 * 有callback function的时候 就用箭头函数 this指向不会错误
 *
 * props只能从父到子传 目的是为了让孩子和父亲交流 从app.js传出一个callback function给searchbar.js
 *
 * key={image.id}
 *
 * interact/reach with dom (createref)
 */
