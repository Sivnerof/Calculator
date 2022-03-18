const buttons = document.querySelectorAll('button');
let values = [];
let memory = '';

const add = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a * b;
};

const divide = function(dividend, divisor){
    return dividend / divisor;
};

const square = function(num, power){
    return num ** power;
};

const operate = function(operator, a, b){
    switch(operator){
        case "+":
            return add(a, b); 
            break;
        case "-":
            return subtract(a, b); 
            break;
        case "*":
            return multiply(a, b); 
            break;
        case "/":
            return divide(a, b); 
            break;
        case "^":
            return square(a, b); 
            break;
        default: 
            alert('Error');
    };
};

const display = function(value, elem_class){
    const mem_display = document.querySelector('#memory-div');
    const operators = ['/', '-', '+', '*', '^'];
    if (elem_class === 'num-button'){
        if (value === '.' && values.includes('.') === true){
            return;
        } else {
            values.push(value);
        }
    } else if (elem_class === 'operator'){
        if(values.some(item => operators.includes(item)) == false){
            values[0] = values.join('');
            values.length = 1;
            values.push(value);
        } else {
            values[2] = values.splice(2).join('');
            mem_display.innerText = values.join(''); 
            values[0] = operate(values[1], +values[0], +values[2]);
            values[1] = value;
            values.length = 2;
        }
    }
    const current_display = document.querySelector('#current-display');
    current_display.innerText = values.join('');
};

const deleteAll = function(){
    const current_display = document.querySelector('#current-display');
    values.length = 0;
    current_display.innerText = '';
};

const clearLast = function(){
    const current_display = document.querySelector('#current-display');
    if (current_display.innerText != ''){
        values.pop();
        current_display.innerText = values.join('');
    };
};

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.value === 'DA'){
            deleteAll();
        } else if (e.target.value === 'C'){
            clearLast();
        } else {
            display(e.target.value, e.target.className);
        };
    });
});
