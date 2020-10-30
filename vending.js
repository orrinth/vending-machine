const enteredCodeDisplay = document.getElementById("entered-code");
const enteredMoneyDisplay = document.getElementById("money-total");
const purchaseList = document.getElementById("purchase-list");
const bank = document.getElementById("bank");

let bankTotal = 15.00;
bank.textContent = String(bankTotal.toFixed(2));
let total = 0.00;
enteredMoneyDisplay.textContent = String(total.toFixed(2));
let purchaseIndex = 0;
let purchaseInfo;
let newLi;
let newText;
let numLetterCodeArray = [];
let numLetterCode;
let newTextReplaced;
let lastTotal;

const onebtn = document.getElementById("one");
const twobtn = document.getElementById("two");
const threebtn = document.getElementById("three");
const fourbtn = document.getElementById("four");
const fivebtn = document.getElementById("five");
const sixbtn = document.getElementById("six");
const sevenbtn = document.getElementById("seven");
const eightbtn = document.getElementById("eight");
const ninebtn = document.getElementById("nine");

const btnA = document.getElementById("a");
const btnB = document.getElementById("b");
const btnC = document.getElementById("c");
const btnD = document.getElementById("d");
const btnE = document.getElementById("e");
const btnF = document.getElementById("f");

const centBtn = document.getElementById("cent25");
const dollarBtn = document.getElementById("dollar1");
const payBtn = document.getElementById("pay");
const returnBtn = document.getElementById("return");

let moneyEntered = 0;

function disableNumCodeBtns() {
    onebtn.disabled = true; 
    twobtn.disabled = true; 
    threebtn.disabled = true;
    fourbtn.disabled = true;
    fivebtn.disabled = true;
    sixbtn.disabled = true;
    sevenbtn.disabled = true;
    eightbtn.disabled = true;
    ninebtn.disabled = true;
}

function enableNumCodeBtns() {
    onebtn.disabled = false; 
    twobtn.disabled = false;
    threebtn.disabled = false;
    fourbtn.disabled = false;
    fivebtn.disabled = false;
    sixbtn.disabled = false;
    sevenbtn.disabled = false;
    eightbtn.disabled = false;
    ninebtn.disabled = false;
}

function disableLetterCodeBtns() {
    btnA.disabled = true;
    btnB.disabled = true;
    btnC.disabled = true;
    btnD.disabled = true;
    btnE.disabled = true;
    btnF.disabled = true;
}

function enableLetterCodeBtns() {
    btnA.disabled = false;
    btnB.disabled = false;
    btnC.disabled = false;
    btnD.disabled = false;
    btnE.disabled = false;
    btnF.disabled = false;
}

function disablePayBtns() {
    centBtn.disabled = true;
    dollarBtn.disabled = true;
    payBtn.disabled = true;
    returnBtn.disabled = true;
}

function enablePayBtns() {
    centBtn.disabled = false;
    dollarBtn.disabled = false;
    payBtn.disabled = false;
    returnBtn.disabled = false;
}

function centFunc() {
    total += 0.25;
    enteredMoneyDisplay.textContent = String(total.toFixed(2));
    bankTotal -= 0.25;
    bank.textContent = String(bankTotal.toFixed(2));
}

function dollarFunc() {
    total += 1.00;
    enteredMoneyDisplay.textContent = String(total.toFixed(2));
    bankTotal -= 1.00;
    bank.textContent = String(bankTotal.toFixed(2));
}

function payFunc() {
    purchaseIndex++;
    purchaseInfo = document.querySelector(`#purchase-list li:nth-of-type(${purchaseIndex})`);
    purchaseInfo.textContent = String("$" + total.toFixed(2));

    if (purchaseInfo.textContent == "$0.00") {
        newText = document.createTextNode(" - No money entered.");
        purchaseInfo.appendChild(newText);
    } else {
        newText = document.createTextNode(" - Please select item...");
        purchaseInfo.appendChild(newText);
    
        lastTotal = total;

        total = 0;
        enteredMoneyDisplay.textContent = String(total.toFixed(2));

        disablePayBtns();
        enableNumCodeBtns();
        enableLetterCodeBtns();
    }
}

function returnFunc() {
    bankTotal += total;
    bank.textContent = String(bankTotal.toFixed(2));
    total = 0;
    enteredMoneyDisplay.textContent = String(total.toFixed(2));
}

function returnItemFunc() {
    bankTotal += lastTotal;
    bank.textContent = String(bankTotal.toFixed(2));
    total = 0;
    enteredMoneyDisplay.textContent = String(total.toFixed(2));
}

function wrapUp() {
    
    purchaseInfo.removeChild(newText);
    purchaseInfo.appendChild(newTextReplaced);

    newLi = document.createElement("li");
    newLi.textContent = "None";
    purchaseList.appendChild(newLi);

    enteredCodeDisplay.textContent = "__";
    numLetterCodeArray = [];
    enablePayBtns();
    disableNumCodeBtns();
    disableLetterCodeBtns();
}

function codeBtnContent() {
    if (enteredCodeDisplay.textContent == "__" && enteredCodeDisplay.textContent.length < 3) {
        enteredCodeDisplay.textContent = this.textContent;
        switch (this.textContent) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                numLetterCodeArray.push(this.textContent);
                disableNumCodeBtns();
                break;
        }

    } else {
        if (enteredCodeDisplay.textContent.length < 3) {
            enteredCodeDisplay.textContent += this.textContent;
            switch (this.textContent) {
                case "A":
                case "B":
                case "C":
                case "D":
                case "E":
                case "F":
                    numLetterCodeArray.push(this.textContent);
                    disableLetterCodeBtns();
                    break;
            }
        }
    }

    if (numLetterCodeArray.length == 2) {
        numLetterCode = numLetterCodeArray.join("");
        
        if (lastTotal == 0.50) {
            switch (numLetterCode) {
                case "1A":
                    newTextReplaced = document.createTextNode("- 1A: Water");
                    wrapUp();
                    break;
                case "2B":
                    newTextReplaced = document.createTextNode("- 2B: Fruit Juice");
                    wrapUp();
                    break;
                case "3C":
                    newTextReplaced = document.createTextNode("- 3C: Veggie Juice");
                    wrapUp();
                    break;
                default:
                    newTextReplaced = document.createTextNode(" Money has been returned. Money must match item's exact cost.");
                    wrapUp();
                    returnItemFunc();
                    break;
            }
        } else if (lastTotal == 2.00) {
            switch (numLetterCode) {
                case "4A":
                    newTextReplaced = document.createTextNode("- 4A: Soup");
                    wrapUp();
                    break;
                case "5B":
                    newTextReplaced = document.createTextNode("- 5B: Smoothie");
                    wrapUp();
                    break;
                case "6C":
                    newTextReplaced = document.createTextNode("- 6C: Yogurt");
                    wrapUp();
                    break;
                default:
                    newTextReplaced = document.createTextNode(" Money has been returned. Money must match item's exact cost.");
                    wrapUp();
                    returnItemFunc();
                    break;
            }
        } else if (lastTotal == 1.00) {
            switch (numLetterCode) {
                case "7A":
                    newTextReplaced = document.createTextNode("- 7A: Veggie Chips");
                    wrapUp();
                    break;
                case "8B":
                    newTextReplaced = document.createTextNode("- 8B: Dried Fruit");
                    wrapUp();
                    break;
                case "9C":
                    newTextReplaced = document.createTextNode("- 9C: Salad");
                    wrapUp();
                    break;
                default:
                    newTextReplaced = document.createTextNode(" Money has been returned. Money must match item's exact cost.");
                    wrapUp();
                    returnItemFunc();
                    break;
            }
        } else if (lastTotal == 0.25) {
            switch (numLetterCode) {
                case "1D":
                    newTextReplaced = document.createTextNode("- 1D: Cinnamon Gum");
                    wrapUp();
                    break;
                case "2E":
                    newTextReplaced = document.createTextNode("- 2E: Mint Gum");
                    wrapUp();
                    break;
                case "3F":
                    newTextReplaced = document.createTextNode("- 3F: Fruit Gum");
                    wrapUp();
                    break;
                default:
                    newTextReplaced = document.createTextNode(" Money has been returned. Money must match item's exact cost.");
                    wrapUp();
                    returnItemFunc();
                    break;
            }
        } else if (lastTotal == 0.00) {
            wrapUp();
        }

        if (bank.textContent == "0.00") {
            disablePayBtns();
            disableNumCodeBtns();
            disableLetterCodeBtns();
        }
    }
}

disableNumCodeBtns();
disableLetterCodeBtns();

onebtn.addEventListener("click", codeBtnContent);
twobtn.addEventListener("click", codeBtnContent);
threebtn.addEventListener("click", codeBtnContent);
fourbtn.addEventListener("click", codeBtnContent);
fivebtn.addEventListener("click", codeBtnContent);
sixbtn.addEventListener("click", codeBtnContent);
sevenbtn.addEventListener("click", codeBtnContent);
eightbtn.addEventListener("click", codeBtnContent);
ninebtn.addEventListener("click", codeBtnContent);

btnA.addEventListener("click", codeBtnContent);
btnB.addEventListener("click", codeBtnContent);
btnC.addEventListener("click", codeBtnContent);
btnD.addEventListener("click", codeBtnContent);
btnE.addEventListener("click", codeBtnContent);
btnF.addEventListener("click", codeBtnContent);

centBtn.addEventListener("click", centFunc);
dollarBtn.addEventListener("click", dollarFunc);
payBtn.addEventListener("click", payFunc);
returnBtn.addEventListener("click", returnFunc);
