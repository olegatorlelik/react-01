import "./App.css";
import React from "react";
import SetState from "./SetState";
import Appsquad from "./Squad/Appsquad";
import dataTest from "./data.json";
import DataList from "./DataList";


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
        {dataTest.map((elem) => {
          return (
            <DataList
              name={elem.name.first}
              lastName={elem.name.last}
              key={elem.index}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
