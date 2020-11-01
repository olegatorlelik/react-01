import React from "react";

class SetState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      italic: false,
    };
    this.createClass = this.createClass.bind(this);
  }
  
  createClass() {
    this.setState({ italic: !this.state.italic });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <p
          onClick={this.createClass}
          className={this.state.italic ? "italick" : "color"}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad natus
          sunt, labore magni quisquam animi voluptatibus esse doloremque
          laboriosam eum harum ullam fugit necessitatibus excepturi iste earum
          in perferendis distinctio!
        </p>
      </div>
    );
  }
}
export default SetState;
