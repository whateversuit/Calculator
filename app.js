const buttonsDigit = document.querySelectorAll('.digit');
const buttonsOperand = document.querySelectorAll('.operand');
const buttonClearAll = document.querySelector('.clear');
const buttonDelete = document.querySelector('.delete');
const buttonEquals = document.querySelector('.equals');


buttonsDigit.forEach(button => {
    const paragraph = document.getElementById('p');
    button.addEventListener('click', (e) => {
    const text = document.createTextNode(e.target.innerText);
    paragraph.appendChild(text);
    })


})




buttonsOperand.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText)
    })
})

buttonClearAll.addEventListener('click', (e) => {
    console.log(e.target.innerText)
})
buttonDelete.addEventListener('click', (e) => {
    console.log(e.target.innerText)
})
buttonEquals.addEventListener('click', (e) => {
    console.log(e.target.innerText)
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

