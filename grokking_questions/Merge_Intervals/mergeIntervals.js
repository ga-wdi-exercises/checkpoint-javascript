// Given a list of intervals, merge all the overlapping intervals 
// to produce a list that has only mutually exclusive intervals.

class Interval {
    constructor(start, end) {
        this.start = start
        this.end = end
    }
    get_interval() {
        return "[" + this.start + ", " + this.end + "]";
    }
}

const merge = function (intervals) {
    // array to hold merged intervals
    merged = []
    if (intervals.length < 2) {
        return intervals
    }
    // compare start + end of interval to the following interval.start, interval.end

    
    return merged
}

merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)

[(2, 4), (5, 9), (6, 7)]

merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)
