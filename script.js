const billAmount = document.querySelector("#bill_amount");
const cashGiven = document.querySelector("#cash_given");
const nextBtn = document.querySelector("#next");
const checkBtn = document.querySelector("#check");
const message = document.querySelector("#error_msg");
const noOfNotes = document.querySelectorAll('.number-of-notes');
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextBtn.addEventListener("click", function hideShow() {
    if (billAmount.value === '') {
        showMessage("Please Fill the Bill Amount");
    } else {
        hideMessage();
        document.querySelector(".hide").style.display = "block";
        document.querySelector("#check").style.display = "block";
    }
});

checkBtn.addEventListener('click', function validateBillAndCashAmount() {
    hideMessage();
    if (billAmount.value === '' || cashGiven.value === '') {
        showMessage("Please Fill the Both Amounts");
    } else {
        hideMessage();
        document.querySelector("table").style.display = "block";

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
    }

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
