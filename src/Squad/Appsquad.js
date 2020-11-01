import React from "react";
import Bigsquad from "./Bigsquad";
import Midlesquad from "./Midlesquad";
import Smallsquad from "./Smallsquad";
class Appsquad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "big",
      color: "black",
      text: "Big Box",
    };
    this.setMidleBox = this.setMidleBox.bind(this);
  }
  setMidleBox() {
    this.setState({ size: "midle", text: "midle box" });
  }

  render() {
    return (
      <div>
        <div
          onClick={() => {
            this.setState({ size: "big", text: "big box" });
          }}
        >
          <Bigsquad lable={this.state.text} cssClass={this.state.size} />
        </div>

        <div onClick={this.setMidleBox}>
          <Midlesquad lable={this.state.text} cssClass={this.state.size} />
        </div>
        <div
          onClick={() => {
            this.setState({ size: "small", text: "small box" });
          }}
        >
          <Smallsquad lable={this.state.text} cssClass={this.state.size} />
        </div>
      </div>
    );
  }
}

export default Appsquad;
