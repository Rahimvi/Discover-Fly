// First Class Ticket
function ticketIncreaseDecrease(isIncrease) {
    const increaseDecrease = document.getElementById("first-count");
    const ticketCount = parseInt(increaseDecrease.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0 ) {
        ticketNewCount = ticketCount - 1;
    }
    increaseDecrease.value = ticketNewCount;
    let firstEconomyClass = ticketNewCount * 150;
    document.getElementById('first-class').innerText = firstEconomyClass;
    totalCalculator()
}

// Economy Class Ticket

function ticketEconomy(isIncrease) {
    const increaseDecrease = document.getElementById("economy-count");
    const ticketCount = parseInt(increaseDecrease.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0 ) {
        ticketNewCount = ticketCount - 1;
    }
    increaseDecrease.value = ticketNewCount;
    let firstEconomyClass = ticketNewCount * 100;
    document.getElementById('second-class').innerText = firstEconomyClass;

    totalCalculator()
}

// Subtotal, Tax, GrandTotal

function totalCalculator() {
    const firstInput = document.getElementById("first-count");
    const firstCount = parseInt(firstInput.value);
    
    const economyInput = document.getElementById("economy-count");
    const economyCount = parseInt(economyInput.value);

    const subTotal = firstCount * 150 + economyCount * 100;

    const tax = subTotal * 0.1;

    const grandTotal = subTotal + tax;

    document.getElementById("grand-total").innerText = grandTotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("book-now").addEventListener("click", function (){
        swal("Your Total Ticket Price" + "=" + grandTotal);
    })
}