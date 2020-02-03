import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = event => {
    //e.target表示该DOM元素，然后在获取其相应的属性值。
    //console.log(event.target.value);
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    //防止再次刷新网页
    event.preventDefault();
    //调用props 从app传进来的函数 给出用户的输入
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>video search</label>
            <input
              type="text"
              value={this.state.term}
              //onChange是一个eventhandler 每当有变化的时候回调用回调函数
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/**
 * axios library 发送请求给youtube api 再response 一个object
 */
