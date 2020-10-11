import React, { Component } from "react";
import "./timer-screen.scss";
import { IntervalListState, Interval } from "../model/intervals";
import Monospaceify from "../monospace-ify/monospace-ify";

interface TimerScreenProps {
    intervals: Interval[];
}

interface TimerScreenState extends IntervalListState {
    currentTimer: { id: number; left: number };
}

class TimerScreen extends Component<TimerScreenProps, TimerScreenState> {
    private literalIntervalID: NodeJS.Timeout = setTimeout(() => {}, 1);

    constructor(props: TimerScreenProps) {
        super(props);

        this.state = {
            intervals: props.intervals,
            currentTimer: { id: 1, left: props.intervals[0].interval * 60 },
        };
    }

    componentDidMount() {
        // start the timer by default
        this.startTheTimer();
    }

    private startTheTimer() {
        this.literalIntervalID = setInterval(() => {
            const cur = this.state.currentTimer;
            this.setState({
                currentTimer: { ...cur, left: cur.left - 1 },
            });
            if (this.state.currentTimer.left === 0) {
                clearInterval(this.literalIntervalID);
            }
        }, 1000);
    }

    render() {
        return (
            <div className="timer-screen">
                <div className="current">
                    <p className="description-shadow-mask"></p>
                    <p className="description">
                        “{
                            this.state.intervals[this.state.currentTimer.id - 1]
                                .description
                        }”
                    </p>
                    <div className="left">
                        <Monospaceify
                            value={Math.floor(
                                this.state.currentTimer.left / 60
                            ).toString()}
                        />
                        <p className="colon">:</p>
                        <Monospaceify
                            value={
                                (this.state.currentTimer.left % 60 < 10
                                    ? "0"
                                    : "") +
                                (this.state.currentTimer.left % 60).toString()
                            }
                        />
                        <p className="remaining">remaining</p>
                    </div>
                </div>
                <div className="outline">
                    {this.state.intervals.map((interval) => (
                        <div key={interval.id} className="interval">
                            <p className="value">
                                {interval.interval}{" "}
                                <span className="unit">minutes</span>
                            </p>
                            {interval.description ? (
                                <p className="description">
                                    “{interval.description}”
                                </p>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default TimerScreen;
