import * as _ from "lodash";

export class Line {

    static counter = 0;

    static padCount: number;

    count = 0;

    

    constructor (public line: string) {
        this.count = Line.counter;
        Line.counter += 1;
    }  
    
    static addLeadZeros (i : number): string {
        if (!Line.padCount) {
            Line.padCount = Line.counter.toString().length 
        }
        return _.padStart(i.toString(), Line.padCount, "0")
    }

    numbered() : string {
        return Line.addLeadZeros(this.count) + ":" + this.line 
    }  
}


