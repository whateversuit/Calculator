// TODO

// Make delete/backspace button work
// add floating point numbers
// add maximum numbers so it does not break display.
// add keyboard support

const buttonsDigit = document.querySelectorAll('.digit');
const buttonsOperator = document.querySelectorAll('.operand');
const buttonClearAll = document.querySelector('.clear');
const buttonDelete = document.querySelector('.delete');
const buttonEquals = document.querySelector('.equals');
const paragraph = document.getElementById('p');

let num = '';
let numTwo = '';
let operator = '';

// loops through all digit buttons and onclick, display it on screen whilte creating a p tag.
// adding to numTwo instead of num if operator is chosen

buttonsDigit.forEach(button => {
    button.addEventListener('click', (e) => {
        if(operator == ''){
            const text = document.createTextNode(e.target.innerText);
            paragraph.appendChild(text);
            num += e.target.innerText;
             num = parseInt(num);   
        }
        else if (operator !== '') {
            const text = document.createTextNode(e.target.innerText);
            paragraph.appendChild(text);
            numTwo += e.target.innerText;
            numTwo = parseInt(numTwo);  
        }
     })
})

// loops through operators, adding them to screen and stores in variable.

buttonsOperator.forEach(button => {
    button.addEventListener('click', (e) => {
        if (operator === '') {
            const text = document.createTextNode(e.target.innerText);
            paragraph.appendChild(text);
            operator += e.target.value;           
        }
         else if (operator !== '' && num == ''){
             operator = '';
             operator += e.target.value;
             paragraph.innerText = e.target.innerText  
         }
        else if (operator !=='' && numTwo !==''){
             paragraph.innerText = `= ${operate(operator, num, numTwo)}${e.target.innerText}`;
             num = operate(operator, num, numTwo);
             numTwo = '';
             operator = '';
             operator += e.target.value;
        } 
    })
})

// clear all numbers and operators stored in variables and on-screen
buttonClearAll.addEventListener('click', (e) => {
    num = '';
    numTwo = '';
    operator = '';
    paragraph.innerText = '';
})

buttonDelete.addEventListener('click', (e) => {
    console.log(e.target.innerText)
//    paragraph.innerText = paragraph.innerText.slice(0, -1);
//    num = num.toString().slice(0, -1);
//    num = parseInt(num);
//    operator = operator.slice(0, -1);
//    numTwo = numTwo.toString().slice(0, -1);
//    numTwo = parseInt(num);
   
})

// Equals button calling operate function and changing innertext.
buttonEquals.addEventListener('click', (e) => {
    paragraph.innerText= `= ${operate(operator, num, numTwo)}`;
    num = operate(operator, num, numTwo);
    numTwo = '';
    operator = '';

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
// Operate function
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
        return paragraph.innerText = "Please redo calculation (CA)";
    }
};



