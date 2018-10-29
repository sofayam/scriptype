var a = {
    key1: 2,
    key2: [3, 2, 1],
    key3: ["hello",
        1,
        { a: 2, b: "other" }
    ]
}

a.doesntExist = a.notThere;

function doSomethingInscrutable(x) {
    var a = x.notThereEither
    return a + 2
}

doSomethingInscrutable(a.alsoNotThere, "not used")
