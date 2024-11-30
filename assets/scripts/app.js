let currentResult = 0;

function getUserInput () {
    return parseInt(userInput.value);
}

function createAndWriteOutput (operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult (currentResult, calcDescription);
}

function add () {
    const enteredNumber = getUserInput ();
    let initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    const output = createAndWriteOutput ("+", initialResult, enteredNumber);
    return output;
}

function subtract () {
    const enteredNumber = getUserInput ();
    let initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    const output = createAndWriteOutput ("-", initialResult, enteredNumber);
    return output;
}

function multiply () {
    const enteredNumber = getUserInput ();
    let initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    const output = createAndWriteOutput ("x", initialResult, enteredNumber);
    return output;
}

function divide () {
    const enteredNumber = getUserInput ();
    let initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    const output = createAndWriteOutput ("/", initialResult, enteredNumber);
    return output;
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);