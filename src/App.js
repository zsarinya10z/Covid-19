import "./App.css";

import React from "react";
import Covid from "./Covid";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "covid",
      data: {},
    };
  }

  componentDidMount() {
    var self = this;
    this.setState({ name: "covid" });
    axios
      .get("https://covid19.th-stat.com/api/open/today")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .then((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Covid data={this.state.data} />
      </div>
    );
  }
}
export default App;
