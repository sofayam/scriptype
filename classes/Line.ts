

export class Line {

    static counter = 0;

    count = 0;

    constructor (public line: string) {
        this.count = Line.counter;
        Line.counter += 1;
    }  
    
    description() : string {
        return this.count + ":" + this.line 
    }  
}


