import React from "react";
//防止overlap
/**
 *
 */
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    //height 还没有load up
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    //解构
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img alt={description} src={urls.regular} ref={this.imageRef} />
      </div>
    );
  }
}

export default ImageCard;
