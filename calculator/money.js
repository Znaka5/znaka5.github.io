function money(input) {
    let hotel = input[0];
    let pricefor1Night = Number(input[1]);
    let countAllNights = Number(input[2]);
    let oluingClusterPrice = Number(input[3]);
    let sum = countAllNights * pricefor1Night + oluingClusterPrice;
    console.log(`The money you need to pay to ${hotel} is ${sum.toFixed(2)} lv.`)
    return sum
}
function result() {
    let hotel = document.getElementById('company').value;
let pricefor1Night = document.getElementById('adults').value;
let countAllNights = document.getElementById('kids').value;
let oluingClusterPrice = document.getElementById('price').value;

let result = money(hotel, pricefor1Night, countAllNights, oluingClusterPrice,)
console.log(result)

let div = document.getElementById("sum")
    div.textContent = result
}
    

    
