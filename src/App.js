import "./App.css";
import React from "react";
import SetState from "./SetState";
import Appsquad from "./Squad/Appsquad";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignegl: false,
      text: "CLICK",
    };
  }

  sign = () => {
    this.setState({ isSignegl: !this.state.isSignegl });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <button onClick={this.sign}>GO!!!</button>
        {this.state.isSignegl ? <div>GOGOGO</div> : <div>NONONO</div>}
        <SetState />
        <Appsquad />
      </div>
    );
  }
}

export default App;
