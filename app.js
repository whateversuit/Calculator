// TODO

// make operator replace when button pressed
// make new variable with = results
// make it not break when using delete button +++
// make only one function out of operate instead of several callbacks
// maybe not use arrays. Use only string, check if possible.

const buttonsDigit = document.querySelectorAll('.digit');
const buttonsOperand = document.querySelectorAll('.operand');
const buttonClearAll = document.querySelector('.clear');
const buttonDelete = document.querySelector('.delete');
const buttonEquals = document.querySelector('.equals');
const paragraph = document.getElementById('p');

let num = '0';
let numTwo = '0';
let operator = '';
let numArray = [0];
let numTwoArray = [0];


// loops through all digit buttons and onclick, display it on screen whilte creating a p tag.
// adding string of num to an array called numArray(spread) 
// adding to numTwo instad of num if operator is chosen

buttonsDigit.forEach(button => {
    button.addEventListener('click', (e) => {
        if(operator == ''){
            const text = document.createTextNode(e.target.innerText);
            paragraph.appendChild(text);
            num += e.target.innerText;
             numArray = [...num];
             num = parseInt(num)
             console.log(numArray)
        }else {
            const text = document.createTextNode(e.target.innerText);
            paragraph.appendChild(text);
            numTwo += e.target.innerText;
             numTwoArray = [...numTwo];
             numTwo = parseInt(numTwo)
             console.log(numTwoArray)
        }
     })
})

// loops through operators, adding them to screen and stores in variable. Only if empty.

buttonsOperand.forEach(button => {
    button.addEventListener('click', (e) => {
        if (operator === "") {
            const text = document.createTextNode(e.target.innerText);
            paragraph.appendChild(text);
            operator += e.target.value;
            console.log(e.target.value)
            
        }
    })
})

// clear all numbers and operators stored in variables and on-screen
buttonClearAll.addEventListener('click', (e) => {
    console.log(e.target.innerText)
    num = '';
    numTwo = '';
    operator = '';
    numArray =[0];
    numTwoArray=[0];
    paragraph.innerText = "";
})

buttonDelete.addEventListener('click', (e) => {
    console.log(e.target.innerText)
    //const deleteNum = num.slice(0, -1);
    numArray.pop();
    paragraph.innerText = numArray.join('');
    //paragraph.innerText = (num)
})

// Equals button calling operate function and changing innertext.
buttonEquals.addEventListener('click', (e) => {
    console.log(operate(operator, num, numTwo));
    paragraph.innerText= `= ${operate(operator, num, numTwo)}`;
})

// Single operation functions
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
    if (operator == '+') {
        return add(num, numTwo);
    }
    if (operator == '-') {
        return subtract(num, numTwo);
    }
    if (operator == '*') {
        return multiply(num, numTwo);
    }
    if (operator == '/') {
        return divide(num, numTwo);
    } else {
        return false;
    }
};



