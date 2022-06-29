const display = document.querySelector('.display');
  display.textContent = "0";

function add(a, b) {
    return (a + b);
};

function subtract(a, b) {
    return (a - b);
};

function multiply(a, b) {
    return (a * b);
};

function divide(a, b) {
    return (a / b);
;}

function operate(a, operator, b) {
    display.textContent = (a + " " + operator + " " + b + " = " (operator(a, b)));
}

const butt1 = document.querySelector('.b1');
  butt1.addEventListener("click", () => {
    if (operate(a) = null) {
        operate(a) = 1;
    } else {
        operate(b) = 1;
    }
  });

const butt2 = document.querySelector('.b2');

const butt3 = document.querySelector('.b3');

const butt4 = document.querySelector('.b4');

const butt5 = document.querySelector('.b5');

const butt6 = document.querySelector('.b6');

const butt7 = document.querySelector('.b7');

const butt8 = document.querySelector('.b8');

const butt9 = document.querySelector('.b9');

const butt0 = document.querySelector('.b0');

const buttClear = document.querySelector('.clear');

const buttDec = document.querySelector('.decimal');

const buttAdd = document.querySelector('.add');

const buttSub = document.querySelector('.subtract');

const buttMul = document.querySelector('.multiply');

const buttDiv = document.querySelector('.divide');

const buttOp = document.querySelector('.operate');