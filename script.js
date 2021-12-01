let inputL = document.getElementById("input")
let squareEl = document.getElementById("enter")

function script(input) {
     let n = Number(inputL.value)
     let c = Number(squareEl.value)
    if (!n && !c) {
        alert("please enter valid enteger!")
        inputL.value = ""
        squareEl.value = ""
    } 
    let a = input[n]
    let b = input[c]

    let a1 = a[0]
    let b1 = b[0]
    let a2 = a[1]
    let b2 = b[1]
    let a3 = a[2]
    let b3 = b[2]
    let a4 = a[3]
    let b4 = b[3]

    let sum = ''

    for (let i = a; i <= b; i++) {
        for (let j = a1; j <= b1; j++) {
            for (let k = a2; k <= b2; k++) {
                for (let h = a3; h <= b3; h++) {
                    for (let l = a4; l <= b4; l++) {
                        if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0  && h % 2 !== 0 && l % 2 !== 0) {
                            sum = sum +i+j+k+h+l+' '
                            console.log(sum)
                        }
                    }
                }
            }
        }
    }
    console.log(sum)
}