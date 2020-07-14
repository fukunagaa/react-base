import React from "react";

class Layout extends React.Component {
  constructor() {
    super();
    this.name = "TAKESHI";
  }
  render() {
    return (
      <div>
        <h1>React Welcome !!</h1>
        <h2>add conponent1</h2>
        <h2>{this.name} add conponent2 </h2>
      </div>
    );
  }
}

export default Layout;
