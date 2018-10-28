
let b : number = 0;

enum eNormal {red, blue, green}

const enred = eNormal[eNormal.red];

let k = Object.entries(eNormal);

console.log(k);

enum eStrange {a = 2, b, c=6, d=4, e, f="bla"};
const enstr = eStrange[eStrange.f];

b = eStrange.a; 

enum ShapeKind {
    Circle = "Circle",
    Square = "Square",
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = { kind: ShapeKind.Circle, radius: 10}

console.log(JSON.stringify(c))