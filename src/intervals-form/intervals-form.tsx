import React, { Component, ChangeEvent, FormEvent } from "react";
import "./intervals-form.scss";
import { IntervalListState, IntervalList } from "../model/intervals";

interface IntervalsFormProps {
    submitFunction: (intervals: IntervalList) => any;
}

class IntervalsForm extends Component<IntervalsFormProps, IntervalListState> {
    constructor(props: IntervalsFormProps) {
        super(props);

        // define some default interval values
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
        };

        this.handleChange = this.handleChange.bind(this);

        this.submitForm = (event: any) => {
            event.preventDefault();
            props.submitFunction(this.state.intervals);
        };
    }

    private submitForm: (event: FormEvent<HTMLFormElement>) => any;

    handleChange(event: ChangeEvent<HTMLInputElement>, id: number) {
        const value = parseInt(event.target.value) || 0;
        this.setState({
            intervals: [
                ...this.state.intervals.slice(0, id - 1),
                {
                    ...this.state.intervals[id - 1],
                    interval: value,
                },
                ...this.state.intervals.slice(id),
            ],
        });
    }

    render() {
        /**
         * Generates input elements for all saved intervals.
         */
        const generateInputElements = () => {
            const output: JSX.Element[] = [];
            // add the ‘autofocus’ attribute to the first element
            let first = true;
            for (const interval of this.state.intervals) {
                output.push(
                    <input
                        autoFocus={first}
                        className="number"
                        key={interval.id}
                        type="text"
                        value={interval.interval || ""}
                        placeholder="0"
                        onChange={(event) =>
                            this.handleChange(event, interval.id)
                        }
                    />
                );
                first = false;
            }
            return output;
        };

        return (
            <form onSubmit={this.submitForm}>
                <div className="intervals">{generateInputElements()}</div>
                <button type="submit">Start</button>
            </form>
        );
    }
}

export default IntervalsForm;
