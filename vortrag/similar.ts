interface A {
    n: number;
    s: string;
}

interface B {
    n: number;
    s: string;
}

let s1: A = {n:1, s: "a"};
let s2: B = s1;
