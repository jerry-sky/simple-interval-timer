import React, { Component } from "react";
import "./program.scss";
import Form from "../intervals-form/intervals-form";
import TimerScreen from "../timer-screen/timer-screen";
import { IntervalList, IntervalListState } from "../model/intervals";

interface ProgramState extends IntervalListState {
    showTimerScreen: boolean;
}

class Program extends Component<{}, ProgramState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            intervals: [],
            showTimerScreen: false,
        };
    }

    public SubmitIntervalForm(intervals: IntervalList) {
        this.setState({ intervals: intervals, showTimerScreen: true });
    }

    render() {
        return (
            <div className="program">
                <p className="header">Interval Timer</p>
                <Form submitFunction={this.SubmitIntervalForm.bind(this)} />
                <div className={this.state.showTimerScreen ? "show" : "hide"}>
                    {this.state.showTimerScreen ? (
                        <TimerScreen intervals={this.state.intervals} />
                    ) : null}
                </div>
            </div>
        );
    }
}

export default Program;
