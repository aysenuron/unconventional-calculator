let currentResult = 0;
let logEntries = [];

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
function logData (operationName, num0, num1, num2) {
    const logEntry = {
        operation : operationName,
        prevResult : num0,
        userNumber : num1,
        newResult : num2
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add () {
    const enteredNumber = getUserInput ();
    let initialResult = currentResult;
    currentResult += enteredNumber; // currentResult + enteredNumber
    const output = createAndWriteOutput ("+", initialResult, enteredNumber);
    logData ("ADD", initialResult, enteredNumber, currentResult);
    return output;
}

function subtract () {
    const enteredNumber = getUserInput ();
    let initialResult = currentResult;
    currentResult -= enteredNumber; // currentResult - enteredNumber
    const output = createAndWriteOutput ("-", initialResult, enteredNumber);
    logData ("SUBTRACT", initialResult, enteredNumber, currentResult);
    return output;
}

function multiply () {
    const enteredNumber = getUserInput ();
    let initialResult = currentResult;
    currentResult *= enteredNumber; // currentResult * enteredNumber
    const output = createAndWriteOutput ("x", initialResult, enteredNumber);
    logData ("MULTIPLY", initialResult, enteredNumber, currentResult);
    return output;
}

function divide () {
    const enteredNumber = getUserInput ();
    let initialResult = currentResult;
    currentResult /= enteredNumber; // currentResult / enteredNumber
    const output = createAndWriteOutput ("/", initialResult, enteredNumber);
    logData ("DIVIDE", initialResult, enteredNumber, currentResult);
    return output;
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);