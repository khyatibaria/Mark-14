var initialPrice = document.querySelector("#initial-price");
var quantityofStock = document.querySelector("#quantity");
var currentPrice = document.querySelector("#currprice-input");
var checkBtn = document.querySelector("#check-btn");
var resultDiv = document.querySelector("#resultdiv");

function calculateProfitAndLoss( initial, quantity, current){

    var initial=initialPrice.value;
    var quantity=quantityofStock.value;
    var current= currentPrice.value;

    if(initial > current){
        var loss=(initial-current)* quantity;
        var lossPercentage=(loss/initial)*100;
        resultDiv.innerText=`Hey your Loss is ${loss} and Loss Percentage is ${lossPercentage}`;
    }
    else if(current > initial)
    {
        var profit =(current-initial)* quantity;
        var profitPercentage=(profit/initial)*100;
        resultDiv.innerText=`Hey your Profit is ${profit} and Profit Percentage is ${profitPercentage}`;
    }
    else{
        resultDiv.innerText="No Pain No Gain";
    }
    
}

checkBtn.addEventListener('click',calculateProfitAndLoss)