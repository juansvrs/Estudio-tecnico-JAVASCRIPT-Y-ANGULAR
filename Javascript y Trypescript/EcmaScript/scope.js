let name = "Global Name";

function outerFunction() {
    let name = "Outer Name";

    function innerFunction() {
        let name = "Inner Name";
        console.log(name); // "Inner Name" (local scope)
    }

    innerFunction();
    console.log(name); // "Outer Name" (outer scope)
}

outerFunction();
console.log(name); // "Global Name" (global scope)
