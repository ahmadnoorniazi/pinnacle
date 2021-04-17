import React from "react";
import HTMLFlipBook from "react-pageflip";
import { Button, Radio } from "antd";

import "./index.scss";
const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div
          className="page-image"
          style={{
            backgroundImage:
              "url('https://nodlik.github.io/StPageFlip/images/html/1.jpg')"
          }}
        ></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

class DemoBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0
    };
  }

  nextButtonClick = () => {
    this.flipBook.getPageFlip().flipNext();
  };

  prevButtonClick = () => {
    this.flipBook.getPageFlip().flipPrev();
  };

  onPage = (e) => {
    this.setState({
      page: e.data
    });
  };

  componentDidMount() {
    this.setState({
      totalPage: this.flipBook.getPageFlip().getPageCount()
    });
  }

  render() {
    return (
      <div className="story-main">
        <HTMLFlipBook
          width={500}
          height={500}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          className="demo-book"
          ref={(el) => (this.flipBook = el)}
        >
          <PageCover>Story TITLE</PageCover>
          <Page number={1}>Page 1 Story Content</Page>
          <Page number={2}>Page 2 Story Content</Page>
          <PageCover>THE END</PageCover>
        </HTMLFlipBook>

        <div className="container">
          <div style={{ marginTop: "25px" }}>
            <Button
              type="primary"
              size={"large"}
              onClick={this.prevButtonClick}
            >
              Previous Page
            </Button>
            [<span>{this.state.page}</span> of
            <span>{this.state.totalPage}</span>]
            <Button
              type="primary"
              size={"large"}
              onClick={this.nextButtonClick}
            >
              Next page
            </Button>
          </div>
          <div>
            State: <i>{this.state.state}</i>, orientation:{" "}
            <i>{this.state.orientation}</i>
          </div>
        </div>
      </div>
    );
  }
}
export default DemoBook;
