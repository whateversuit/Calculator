const buttons = document.querySelectorAll('button');

buttons.addEventListener('click', () => {
    console.log('clicked');
})


// Single operand functions
function add(num, numTwo) {
    return num + numTwo;

}

function subtract(num, numTwo) {
    return num - numTwo;

}

function multiply(num, numTwo) {
    return num * numTwo;

}

function divide(num, numTwo) {
    return num / numTwo;

}
// Operate function. Maybe integrate the above functions into this.
function operate(operator, num, numTwo){
    if (operator == add) {
        return add(num, numTwo);
    }
    if (operator == subtract) {
        return subtract(num, numTwo);
    }
    if (operator == multiply) {
        return subtract(num, numTwo);
    }
    if (operator == divide) {
        return subtract(num, numTwo);
    } else {
        return false;
    }
};

