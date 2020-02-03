import React from "react";

//semantic ui CDN
class SearchBar extends React.Component {
  //把信息存在state好
  state = { term: "" };

  onFormSubmit = event => {
    //为了防止tap enter后再次刷新页面
    event.preventDefault();
    //不能用this.state.term调用输入的内容
    /**
     * this这时候不是class 而是undefined
     * this指代obj 要看调用的位置点号.左边的对象 如果是class的instance就是代指这个class 如果没有就是undifine
     * can not read property state of "undefine"
     * 用箭头函数来解决
     *
     */
    // 我们想要在app里调用api 所以要从searchbar里把输入传到app.js props只能从上级传到下级 不能反着传
    // 挡在class component里调用props时 要加this
    // this props 代表的是onsubmit function
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        {/* //onSubmit能够抓取enter键 */}
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            {/* 不加括号是因为操作指针 不是调用 render会一直执行 
            每次有改动的时候回调用
            onclick = click callback function will be called
            onSubmit = submit when call
            (event) => console.log(event.target.value);一样的
            event也可以被e代替
             */}
            <input
              type="text"
              value={this.state.term}
              //refactor the uncontolled element to controlled element
              //e代表event obj 只要有变化就会执行callback箭头函数 setState更新state里的值 修改state obj
              //track enter键
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
