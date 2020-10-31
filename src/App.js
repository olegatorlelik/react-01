import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignegl: false,
      text: "Hello",
    };
  }

  sign = () => {
    this.setState({ isSignegl: true });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        {this.state.isSignegl ? (
          <div>{this.state.text}</div>
        ) : (
          <div>
            <button onClick={this.sign}>GO!!!</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
