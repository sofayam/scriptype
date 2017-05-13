import * as _ from "lodash";

export class Line {

    static counter = 0;

    count = 0;

    constructor (public line: string) {
        this.count = Line.counter;
        Line.counter += 1;
    }  
    
    static addLeadZeros (i : number): string {
        var padCount =  Line.counter.toString().length
        return _.padStart(i.toString(), padCount, "0")
    }

    numbered() : string {
        return Line.addLeadZeros(this.count) + ":" + this.line 
    }  
}


