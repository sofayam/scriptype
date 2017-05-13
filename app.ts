import * as fs  from "fs"
import * as path from "path"
import * as os from "os"
import { Line } from "./classes/Line"

var objLines : Line[] = [];

var fname : string;
if (process.argv.length > 2) {
    fname = process.argv[2]
} else {
    fname = path.join(__dirname, "..", "data", "input.txt") 
}

var fbuff = fs.readFileSync(fname)

var fstr = fbuff.toString()

var textLines = fstr.split(os.EOL);

textLines.forEach(line => {
    objLines.push(new Line(line))

});

objLines.forEach(obj => {
    console.log(obj.description())
})


