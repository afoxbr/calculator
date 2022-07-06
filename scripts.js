const display = document.getElementById("display");
const num0 = document.getElementById("0");
const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const decimal = document.getElementById("decimal");

const calcObj = {

};

display.textContent = "80081355";

num1.addEventListener("click", () => {
  if (!(operator in calcObj)){
    if (!(oper1 in calc.obj)){
      oper1 = "1";
    } else {
      oper1 += "1";
    };
  } else if ((operator in calcObj)){
    if (!(oper2 in calcObj)){
      oper2 = "1";
    } else {
      oper2 += "1";
    };
  };
});

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
};

function operate(calcObj["oper1"], calcObj["operator"], calcObj["oper2"]){
  if (operator == "+") {
    return add(calcObj["oper1"], calcObj["oper2"]);
  } else if (operator == "-") {
    return subtract(calcObj["oper1"], calcObj["oper2"]);
  } else if (operator == "*") {
    return multiply(calcObj["oper1"], calcObj["oper2"]);
  }else if (operator == "/") {
    return divide(calcObj["oper1"], calcObj["oper2"]);
  };
};