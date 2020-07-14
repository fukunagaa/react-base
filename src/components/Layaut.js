import React from "react";
import Header from "./Header";

class Layout extends React.Component {
  constructor() {
    super();
    this.name = "TAKESHI";
  }
  render() {
    return (
      <div>
        <Header />
        <Header />
        <Header />
        <h2>{this.name} add conponent2 </h2>
      </div>
    );
  }
}

export default Layout;
