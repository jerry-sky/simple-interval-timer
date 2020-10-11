import React, { Component } from "react";
import "./program.scss";
import Form from "../intervals-form/intervals-form";
import TimerScreen from "../timer-screen/timer-screen";
import { IntervalList, IntervalListState } from "../model/intervals";

interface ProgramState extends IntervalListState {
    showTimerScreen: boolean;
}

class Program extends Component<{}, ProgramState> {
    private timerScreen: React.RefObject<TimerScreen> = React.createRef();

    constructor(props: {}) {
        super(props);

        this.state = {
            intervals: [
                {
                    id: 1,
                    interval: 25,
                    description: "Focus",
                },
                {
                    id: 2,
                    interval: 15,
                    description: "Break",
                },
            ],
            showTimerScreen: false,
        };
    }

    public SubmitIntervalForm(intervals: IntervalList) {
        this.setState({ intervals: intervals, showTimerScreen: true });
        this.timerScreen?.current?.startTheTimer(intervals);
    }

    public ToggleTimerScreen() {
        this.setState({ showTimerScreen: !this.state.showTimerScreen });
    }

    render() {
        return (
            <div className="program">
                <p className="header">Interval Timer</p>
                <Form
                    initialIntervals={this.state.intervals}
                    submitFunction={this.SubmitIntervalForm.bind(this)}
                />
                <div className={this.state.showTimerScreen ? "show" : "hide"}>
                    <TimerScreen
                        ref={this.timerScreen}
                        intervals={this.state.intervals}
                        backToMain={this.ToggleTimerScreen.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default Program;
