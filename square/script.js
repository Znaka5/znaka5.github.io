let inputL = document.getElementById("input")
let squareEl = document.getElementById("square")

function test() {
    let n = Number(inputL.value)
    if (!n) {
        alert("please enter valid enteger!")
        inputL.value = ""
    } else {
        let figure = square(n)
        squareEl.textContent = figure
    }

}

function square(n) {
    let row1 = "#".repeat(n - 1) + "\n" + "#".repeat(n - 1) + "\n" + "#".repeat(n - 1) + "\n";
    let row2 = "(" + " ".repeat(n - 3) + ")" + "\n";
    let row3 = "-".repeat(n - 1) + "\n";
    let result = row1;
    console.log(row1);
    for (let j = 1; j <= n - 3; j++) {
        result += row2;


    }
    result += row3;
    return result;
}

function clear1() {
    inputL.value = ""
    squareEl.textContent = ""
}