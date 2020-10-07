import React, { Component } from "react";

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

class EditIntervals extends Component<{}, IntervalListState> {

    constructor(props: {}) {
        super(props);

        // define some default interval values
        this.state = {
            intervals: [
                {
                    id: 1,
                    interval: 25,
                    description: 'Focus'
                },
                {
                    id: 2,
                    interval: 15,
                    description: 'Break'
                }
            ]
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event: Event) {
        console.log('state changed')
    }

    render() {
        return (
            <form>

            </form>
        );
    }
}

export default EditIntervals;

