import React, { Component } from "react";
import "./program.scss";
import Form from "./intervals-form";

class Program extends Component<{}> {
    private submitIntervalForm() {
        console.log("I’m going outside");
    }

    render() {
        return (
            <div className="program">
                <p className="header">Interval Timer</p>
                <Form submitFunction={this.submitIntervalForm} />
            </div>
        );
    }
}

export default Program;
