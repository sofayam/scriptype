enum e1 {a,b,c}

type e2 = "a" | "b" | "c"

enum e3 {a="a",b="b"}

type dict = {[key in e3]: string}

let dd: dict = {a: "hi", "b": "hi",} // bullshit

let aa:e3 = e3.a

dd[aa]

for (let i in e1) {
    console.log(i)
}
for (let i in e3) {
    console.log(i)
}
let ar:e2[] = ["a", "b", "c"]

let e: e3 = e3.a

let a: e2 = ar[1]

let x = e1.a

function f (x:e2) {
    let y = x
    let z = "a"
    //y = z
}




