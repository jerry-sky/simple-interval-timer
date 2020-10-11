/**
 * The object that defines one interval in the program.
 * The user modifies the `interval` field to their liking.
 */
export interface Interval {
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

export type IntervalList = Interval[];

export interface IntervalListState {
    intervals: Interval[];
}
