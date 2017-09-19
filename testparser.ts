import * as tsp from "typescript-parser";

//import Promise from  "Promise";


//intce Promise<T>;erfa

export async function foo()  {

var parser = new tsp.TypescriptParser()

const parsed = await parser.parseSource("var a : string = 'abc'; let b = a + a");

var decs = parsed.declarations;

console.log (JSON.stringify(decs))

var a : string = "a"

}

foo();