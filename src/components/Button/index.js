import React, { Component } from "react";
import { Children } from "react";
import "./button.scss";

class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button
                className={"button_see_more"}
                disabled={this.props.disabled || false}
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button;
