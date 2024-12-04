let currentResult = 0;
let logEntries = [];

function calculateResult (calculationType) {
    const enteredNumber = getUserInput ();
    let initialResult = currentResult;
    let mathOperator;

    if (!enteredNumber) {
        return;
    }

    if (calculationType === "ADD") {
        currentResult += enteredNumber; // currentResult / enteredNumber
        mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
        currentResult -= enteredNumber; // currentResult / enteredNumber
        mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
        currentResult *= enteredNumber; // currentResult / enteredNumber
        mathOperator = "x";
    } else if (calculationType === "DIVIDE") {
        currentResult /= enteredNumber; // currentResult / enteredNumber
        mathOperator = "/";
    }
    const output = createAndWriteOutput (mathOperator, initialResult, enteredNumber);
    logData (calculationType, initialResult, enteredNumber, currentResult);
    return output;
}

// Gets input from input field
function getUserInput () {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput (operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult (currentResult, calcDescription); //from vendor file
}

// Logs calculation in console
function logData (operationName, prevResult, userNumber, newResult) {
    const logEntry = {
        operationName,
        prevResult,
        userNumber,
        newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add () {
    calculateResult ("ADD");
}

function subtract () {
    calculateResult ("SUBTRACT");
}

function multiply () {
    calculateResult ("MULTIPLY");
}

function divide () {
    calculateResult ("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);