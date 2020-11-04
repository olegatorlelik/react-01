import React from "react";
import propTypes from "prop-types";

class PropTypesTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padding: "blla",
    };
    this.showLog = this.showLog.bind(this);
  }

  showLog() {
    console.log(this.props.padding);
  }
  render() {
    return (
      <div>
        <h1>{this.state.padding}</h1>
        <button onClick={this.showLog}>CLICK</button>
      </div>
    );
  }
}

PropTypesTest.propTypes = {
  padding: propTypes.number.isRequired,
};

PropTypesTest.defaultProps = {
  padding: 1,
};

export default PropTypesTest;
