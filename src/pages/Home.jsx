import React, { Component } from "react";
import "../style/Home.scss";
import Img from "../assets/universe_marvel.png";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async componentDidMount() {}
    render() {
        return (
            <>
                <div className="background">
                    <img src={Img} alt={"background"} />
                </div>
            </>
        );
    }
}

export default Home;
