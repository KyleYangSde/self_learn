import React from "react";
import ReactDOM from "react-dom"; //会从node_moudles里寻找依赖文件“react” 然后得到里面的代码
import faker from "faker";
import CommentDetail from "./commentDetail.js";
import ApproveCard from "./approveCard.js";
/**
 * react component is either function or class which produce the html and handle event
 */
const App = () => {
  return (
    <div className="ui container comments">
      <ApproveCard>
        {/* 子组件的属性被包含在父组件的props中 可以用props.children引用*/}
        <CommentDetail
          author="James"
          timeAgo="Today at 2:20PM"
          post="hahahah"
        />
      </ApproveCard>

      <ApproveCard>
        <CommentDetail author="Kyle" timeAgo="Today at 3:20PM" post="mamane" />
        {/* value of
         */}
      </ApproveCard>

      <ApproveCard>
        <CommentDetail author="John" timeAgo="Today at 4:20PM" post="nice" />
      </ApproveCard>

      <ApproveCard>
        <CommentDetail author="Johson" timeAgo="Today at 6:20PM" post="why" />
      </ApproveCard>

      <ApproveCard>
        {" "}
        <CommentDetail
          author="Corner"
          timeAgo="Today at 7:20PM"
          post="what？"
        />
        {/* 调用用其他的component用jsx 而不是{} */}
      </ApproveCard>
    </div>
  ); //return后面不要换行
};

ReactDOM.render(
  <App />,
  document.querySelector("#root") //with id with root
);

/**
 * babel => react.createElement(type,parameter,content)
 * hard to understand when many elements
 */

/**
 * component Nesting
 * HOW WE NEST EACH COMPONENT
 * COMPONENT RESUABILITY
 * COMPONENT CONFIGURATION
 */

/**property:provide information from the children to the child
 * PROPSs:passing data fromm parents components to child components
 * app{
 *     comp1;comp2;comp3
 * }
 * props 是object；key是我们传入的key value是object
 */

/**
 * class component：
 * easier code organization
 * can use state system in react easier to handle input
 * understand the liftcycle events
 *
 */
