var initialPrice = document.querySelector('#initial-price');
var stockQuantity = document.querySelector('#stock-quantity');
var currentPrice = document.querySelector('#current-price');
var calcButton = document.querySelector('#calculate-btn');
var outputScreen = document.querySelector('#output-screen');

function calculateProfitAndLost(initial, quantity, current) {
    if(current > initial) {
        //Profit
        var profit = (current - initial) * quantity;
        var profitPercent = (profit/initial) * 100;
        displayOutput(`Congratualations!! You are in profit of $${profit} and the profit percent is ${profitPercent}%`);
    }
    else if(current < initial) {
        //Loss
        var loss = (current - initial) * quantity;
        var lossPercent = (loss/initial) * 100;
        displayOutput(`Unfortunately you are in loss of $${loss} and the loss percent is ${lossPercent}%`);
    }
    else {
        //balanced
        displayOutput("No Pain No Gain");
    }
}

calcButton.addEventListener('click', calcHandler);

function calcHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var cp = Number(currentPrice.value);

    calculateProfitAndLost(ip,qty,cp);
}

function displayOutput(message) {
    outputScreen.innerHTML = message;
}