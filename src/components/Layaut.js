import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component {
  constructor() {
    super();
    this.name = "TAKESHI";
  }
  render() {
    return (
      <div>
        <Header />
        <h2>{this.name} add conponent2 </h2>
        <Footer />
      </div>
    );
  }
}

export default Layout;
