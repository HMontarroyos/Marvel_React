import React, { Component } from "react";
import Routes from "./routes";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {}

    render() {
        return (
            <>
                <Routes />
            </>
        );
    }
}

export default App;
