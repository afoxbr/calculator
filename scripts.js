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
  butt1.addEventListener("click", );

const butt2 = document.querySelector('.b2');
  butt2.addEventListener("click", );

const butt3 = document.querySelector('.b3');
  butt3.addEventListener("click", );

const butt4 = document.querySelector('.b4');
  butt4.addEventListener("click", );

const butt5 = document.querySelector('.b5');
  butt5.addEventListener("click", );

const butt6 = document.querySelector('.b6');
  butt6.addEventListener("click", );

const butt7 = document.querySelector('.b7');
  butt7.addEventListener("click", );

const butt8 = document.querySelector('.b8');
  butt8.addEventListener("click", );

const butt9 = document.querySelector('.b9');
  butt9.addEventListener("click", );

const butt0 = document.querySelector('.b0');
  butt0.addEventListener("click", );

const buttClear = document.querySelector('.clear');
  buttClear.addEventListener("click", );

const buttDec = document.querySelector('.decimal');
  buttDec.addEventListener("click", );

const buttAdd = document.querySelector('.add');
  buttAdd.addEventListener("click", );

const buttSub = document.querySelector('.subtract');
  buttSub.addEventListener("click", );

const buttMul = document.querySelector('.multiply');
  buttMul.addEventListener("click", );

const buttDiv = document.querySelector('.divide');
  buttDiv.addEventListener("click", );

const buttOp = document.querySelector('.operate');
  buttOp.addEventListener("click", );