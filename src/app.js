import React from "react";
import ReactDOM from "react-dom";
const app = document.getElementById("app");

class Layout extends React.Component {
    render() {
        return (
            <h1>React Welcome !!</h1>
        );
    }
};

ReactDOM.render(<Layout />, app);