function profit(input) {
    let company = input[0];
    let adultTickets = Number(input[1]);
    let childTickets = Number(input[2]);
    let priceAdults = Number(input[3]);
    let tax = Number(input[4]);
    let money = 0;
    money = (priceAdults + tax) * adultTickets
    money = money + childTickets * (priceAdults * 0.3 + tax)
    let profit = money * 0.2;
    console.log(`The profit of your agency from ${company} tickets is ${profit.toFixed(2)} lv.`)
}
function dew() {
    let company = document.getElementById('company')
let adultTickets = document.getElementById('adults')
let childTickets = document.getElementById('kids')
let priceAdults = document.getElementById('price')
let tax = document.getElementById('tax')

let result = profit(company, adultTickets, childTickets, priceAdults, tax)
console.log(result)
}
