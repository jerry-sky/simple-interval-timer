import React, { Component, ChangeEvent, FormEvent } from "react";
import "./EditIntervals.scss";

/**
 * The object that defines one interval in the program.
 * The user modifies the `interval` field to their liking.
 */
interface Interval {
    /**
     * ID of the interval (for list keys).
     */
    id: number;
    /**
     * The actual main interval value.
     */
    interval: number;
    /**
     * Optional short description.
     * E.g. “break”, “focus” etc.
     */
    description?: string;
}

interface IntervalListState {
    intervals: Interval[];
}

export interface EditIntervalsProps {
    submitFunction: () => any;
}

class EditIntervals extends Component<EditIntervalsProps, IntervalListState> {
    constructor(props: EditIntervalsProps) {
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
            props.submitFunction();
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

export default EditIntervals;
