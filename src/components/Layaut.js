import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component {
  constructor() {
    super();
    this.state = { name: "TAKESHI" };
  }

  changeName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <Header
          changeTitle={this.changeName.bind(this)}
          name={this.state.name}
        />
        <Footer />
      </div>
    );
  }
}

export default Layout;
