import React from "react";
import ReactDOM from "react-dom";
import Seasondisplay from "./seasonDisplay.js";
import Spinner from "./spinner.js";
class App extends React.Component {
  //constructor function 是首先被调用的无论什么情况
  //只有一个工作 那就是update or initialize state object
  constructor(props) {
    super(props);
    //SUPER是一个对parent构造函数的一个引用reference，因为在React.Component(base class)也有构造函数,有一些必要的setup code
    //我们其实是在重写这个React.Component的构造函数 但是我们也希望这些setup code保留 能够被调用
    this.state = { Lat: null, errorMessage: "" };
    //{}是state obj 包含了不同的属性和数据
    //lat是state里的一个属性 并且lat的数据类型是数字 我们暂时不知道他的值 我们初始化它为null
  }

  //和上面的一样效果 初始化state ;refactor code ez to read
  // state = { Lat: null, errorMessage: "";}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //回调函数是当主函数/方法成功执行时 进行调用
      position => this.setState({ Lat: position.coords.latitude }),
      //每当我们想要更改state的数据时，只能用setstate，唯一的一次是在初始化用this.state来更改，之后会再次渲染
      //会在constructor被return的时候被调用
      err => this.setState({ errorMessage: err.message })
    );
  }

  //在render里用this.renderContent代替 content render
  renderContent() {
    if (this.state.Lat && !this.state.errorMessage) {
      return <Seasondisplay lat={this.state.lat} />;
    }
    if (!this.state.Lat && this.state.errorMessage) {
      return <div>Error:{this.state.errorMessage}</div>;
    }

    return <Spinner message="Please accept location request" />;
  }

  //render是必须的对于class component 返回jsx
  //render函数会不停的在调用渲染 频率很高
  //当得到geo时 我们希望jsx能够被重新渲染
  //render里最好只return一个 border blue是类名
  render() {
    return <div className="border blue">{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

/**
 * 有时候我们得到自己的position会比渲染的速度慢很多 要注意异步
 * 会导致不能够再次render position了
 * 第一步 我们需要用class component去处理
 * React.Component class里有很多不同的方法
 */

/**
 * State
 * 只能用在class component里
 * props和states可能会被混淆
 * state是一个js的obj 含有和组件相关的数据
 * rerender 如果想要重新渲染组件 使用updating state
 * state必须被初始化当component建立的时候
 * important!!!state只能被setState函数所更新
 */

/**
 * render function 是必须的
 * 先是constuctor     ----------------------good place to do one time setup
 * 再render           ----------------------return jsx
 * 再componendidmount ----------------------good place to do data loading 最好是吧data loading放在这 api的调用 code会更整洁
 * 再render
 * 再componentdidupgrade -------------------good place to do more data loading when state/props change
 * -----------------------------------------当有变化state/props的时候componentdidupgrade会被调用
 * 之后有不要的componentwillunmount----------good place to clean up
 */
