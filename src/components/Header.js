import React from "react";
import Title from "./Title";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { name: "header" };
  }
  handleChange = (e) => {
    const name = e.target.value;
    this.props.changeTitle(name);
  }
  render() {
    return (
      <header>
        <Title name={this.props.name} />
        <input
          value={this.props.name}
          onChange={this.handleChange}
        />
      </header>
    );
  }
}

export default Header;
