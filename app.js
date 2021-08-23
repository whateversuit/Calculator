const buttonsDigit = document.querySelectorAll('.digit');
const buttonsOperand = document.querySelectorAll('.operand');
const buttonClearAll = document.querySelector('.clear');
const buttonDelete = document.querySelector('.delete');
const buttonEquals = document.querySelector('.equals');
const paragraph = document.getElementById('p');

let num = '';
let numTwo = '';
let operator = '';
let numArray = [];

// loops through all digit buttons and onclick, display it on screen whilte creating a p tag.
// Paring num to an int. 
buttonsDigit.forEach(button => {
    button.addEventListener('click', (e) => {
    const text = document.createTextNode(e.target.innerText);
    paragraph.appendChild(text);
    num += e.target.innerText;
    numArray = [...num];
    num = parseInt(num);
    console.log(numArray)
    

    })


})

// loops through operators, adding them to screen

buttonsOperand.forEach(button => {
    button.addEventListener('click', (e) => {
        const text = document.createTextNode(e.target.innerText);
        paragraph.appendChild(text);
        
    })
})
// clear all numbers and operators stored in variables and on-screen
buttonClearAll.addEventListener('click', (e) => {
    console.log(e.target.innerText)
    num = '';
    numTwo = '';
    operator = '';
    numArray =[];
    //const text = document.createTextNode(e.target.innerText);
    paragraph.innerText = "";
  
    

})
buttonDelete.addEventListener('click', (e) => {
    console.log(e.target.innerText)
    numArray.pop();
    paragraph.innerText = numArray.join('');
    
   

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
        return multiply(num, numTwo);
    }
    if (operator == divide) {
        return divide(num, numTwo);
    } else {
        return false;
    }
};

