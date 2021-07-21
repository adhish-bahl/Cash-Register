const billAmount = document.querySelector("#billAmount");
const nextBtn = document.querySelector(".nextBtn");
const messageInvalidAmount = document.querySelector("#messageInvalidAmount");
const cashGivenForm = document.querySelector(".cashGivenForm");
const cashGiven = document.querySelector("#cashGiven");
const checkBtn = document.querySelector(".checkBtn");
const lessCashThanAmount = document.querySelector("#lessCashThanAmount");
const invalidCashBillAmount = document.querySelector("#invalidCashBillAmount");
const outputTable = document.querySelector(".outputTable");
const N2000 = document.querySelector(".N2000");
const N500 = document.querySelector(".N500");
const N100 = document.querySelector(".N100");
const N20 = document.querySelector(".N20");
const N10 = document.querySelector(".N10");
const N5 = document.querySelector(".N5");
const N1 = document.querySelector(".N1");

messageInvalidAmount.style.display = "none";
cashGivenForm.style.display = "none";
lessCashThanAmount.style.display = "none";
invalidCashBillAmount.style.display = "none";
outputTable.style.display = "none";

nextBtn.addEventListener("click", ()=>{
    let billCost = billAmount.value;
    billCost = parseInt(billCost);
    if(billCost <= 0) {
        messageInvalidAmount.style.display="block";
        cashGivenForm.style.display = "none";
        outputTable.style.display = "none"
        invalidCashBillAmount.style.display="none";
        lessCashThanAmount.style.display="none";
    } else {
        messageInvalidAmount.style.display = "none";
        cashGivenForm.style.display = "block";
        lessCashThanAmount.style.display = "none";
        invalidCashBillAmount.style.display = "none";
        outputTable.style.display = "none";
    }
})

checkBtn.addEventListener("click", () => {
    let billCost = billAmount.value;
    let cashCost = cashGiven.value;

    billCost = parseInt(billCost);
    cashCost = parseInt(cashCost);

    console.log(typeof billCost, typeof cashCost);
    if(billCost <= 0 || cashCost <= 0) {
        messageInvalidAmount.style.display = "none";
        cashGivenForm.style.display = "block";
        lessCashThanAmount.style.display = "none";
        invalidCashBillAmount.style.display = "block";
        outputTable.style.display = "none";
    } else if(cashCost < billCost) {
        console.log(billCost, cashCost);
        messageInvalidAmount.style.display = "none";
        cashGivenForm.style.display = "block";
        lessCashThanAmount.style.display = "block";
        invalidCashBillAmount.style.display = "none";
        outputTable.style.display = "none";
    } else {
        messageInvalidAmount.style.display = "none";
        cashGivenForm.style.display = "block";
        lessCashThanAmount.style.display = "none";
        invalidCashBillAmount.style.display = "none";
        outputTable.style.display = "block";
    }
})