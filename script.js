const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-btn');
const message = document.querySelector('#error-message');
const nextBtn = document.querySelector('#next-btn');
const noOfNotes = document.querySelectorAll('.number-of-notes');
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextBtn.addEventListener('click', validateBillAndCashAmount);

checkButton.addEventListener('click', function validateBillAndCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Do you wanna wash plates?");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
    document.querySelector('#error-message').style.cssText = `width: 25%;
    height: 30px;
    text-align: center;
    border: 1px solid #F5E79D;
    border-radius: 5px;
    padding: 5px;
    margin-top: 10px;
    background: linear-gradient(to right, #FDE49C, #E0C097, #F5E79D);`;
});

function calculateChange(amountToBeReturned) {
    
    //available notes
    for (let i = 0; i < availableNotes.length; i++) {
        //no of notes needed for the deomination
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        //amount left after calculating the number of notes needed
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}