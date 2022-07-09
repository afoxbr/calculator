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

const calcObj = {};

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

num2.addEventListener("click", () => {
  if (!(operator in calcObj)){
    if (!(oper1 in calc.obj)){
      oper1 = "2";
    } else {
      oper1 += "2";
    };
  } else if ((operator in calcObj)){
    if (!(oper2 in calcObj)){
      oper2 = "2";
    } else {
      oper2 += "2";
    };
  };
});

num3.addEventListener("click", () => {
  if (!(operator in calcObj)){
    if (!(oper1 in calc.obj)){
      oper1 = "3";
    } else {
      oper1 += "3";
    };
  } else if ((operator in calcObj)){
    if (!(oper2 in calcObj)){
      oper2 = "3";
    } else {
      oper2 += "3";
    };
  };
});

num4.addEventListener("click", () => {
  if (!(operator in calcObj)){
    if (!(oper1 in calc.obj)){
      oper1 = "4";
    } else {
      oper1 += "4";
    };
  } else if ((operator in calcObj)){
    if (!(oper2 in calcObj)){
      oper2 = "4";
    } else {
      oper2 += "4";
    };
  };
});

num5.addEventListener("click", () => {
  if (!(operator in calcObj)){
    if (!(oper1 in calc.obj)){
      oper1 = "5";
    } else {
      oper1 += "5";
    };
  } else if ((operator in calcObj)){
    if (!(oper2 in calcObj)){
      oper2 = "5";
    } else {
      oper2 += "5";
    };
  };
});

num6.addEventListener("click", () => {
  if (!(operator in calcObj)){
    if (!(oper1 in calc.obj)){
      oper1 = "6";
    } else {
      oper1 += "6";
    };
  } else if ((operator in calcObj)){
    if (!(oper2 in calcObj)){
      oper2 = "6";
    } else {
      oper2 += "6";
    };
  };
});

num7.addEventListener("click", () => {
  if (!(operator in calcObj)){
    if (!(oper1 in calc.obj)){
      oper1 = "7";
    } else {
      oper1 += "7";
    };
  } else if ((operator in calcObj)){
    if (!(oper2 in calcObj)){
      oper2 = "7";
    } else {
      oper2 += "7";
    };
  };
});

num8.addEventListener("click", () => {
  if (!(operator in calcObj)){
    if (!(oper1 in calc.obj)){
      oper1 = "8";
    } else {
      oper1 += "8";
    };
  } else if ((operator in calcObj)){
    if (!(oper2 in calcObj)){
      oper2 = "8";
    } else {
      oper2 += "8";
    };
  };
});

num9.addEventListener("click", () => {
  if (!(operator in calcObj)){
    if (!(oper1 in calc.obj)){
      oper1 = "9";
    } else {
      oper1 += "9";
    };
  } else if ((operator in calcObj)){
    if (!(oper2 in calcObj)){
      oper2 = "9";
    } else {
      oper2 += "9";
    };
  };
});

num0.addEventListener("click", () => {
  if (!(operator in calcObj)){
    if (!(oper1 in calc.obj)){
      oper1 = "0";
    } else {
      oper1 += "0";
    };
  } else if ((operator in calcObj)){
    if (!(oper2 in calcObj)){
      oper2 = "0";
    } else {
      oper2 += "0";
    };
  };
});

decimal.addEventListener("click", () => {
  if (!(operator in calcObj)){
    if (!(oper1 in calcObj)){
      oper1 = "0.";
    } else {
      oper1 += ".";
    };
  } else if ((operator in calcObj)){
    if (!(oper2 in calcObj)){
      oper2 = "0.";
    } else {
      oper2 += "."
    };
  };
});

add.addEventListener("click", ()=> {
  if (!(operator in calcObj)){
    operator = "+";
  } else if (operator in calcObj) {
    operate(calcObj);
    oper1 = product;
    operator = "+";
  };
});

subtract.addEventListener("click", ()=> {
  if (!(operator in calcObj)){
    operator = "-";
  } else if (operator in calcObj) {
    operate(calcObj);
    oper1 = product;
    operator = "-";
  };
});

divide.addEventListener("click", ()=> {
  if (!(operator in calcObj)){
    operator = "/";
  } else if (operator in calcObj) {
    operate(calcObj);
    oper1 = product;
    operator = "/";
  };
});

multiply.addEventListener("click", ()=> {
  if (!(operator in calcObj)){
    operator = "*";
  } else if (operator in calcObj) {
    operate(calcObj);
    oper1 = product;
    operator = "*";
  };
});

equals.addEventListener("click", () => {
  operate(calcObj);
});

clear.addEventListener("click", () => {
  delete calcObj.oper1;
  delete calcObj,oper2;
  delete calcObj.operator;
  delete calcObj.product;
  display.textContent = "0";
})

function add(a, b) {
  return (a + b).toFixed(2);
};

function subtract(a, b) {
  return (a - b).toFixed(2);
};

function multiply(a, b) {
  return (a * b).toFixed(2);
};

function divide(a, b) {
  if (oper2 == "0"){
    return "Absolutely not.";
  } else {
    return (a / b).toFixed(2);
  };
};

function operate(calcObj){
  if (calcObj.operator == "+") {
    calcObj.product = add(parseFloat(calcObj.oper1), parseFloat(calcObj.oper2));
  } else if (calcObj.operator == "-") {
    calcObj.product = subtract(parseFloat(calcObj.oper1), parseFloat(calcObj.oper2));
  } else if (calcObj.operator == "*") {
    calcObj.product = multiply(parseFloat(calcObj.oper1), parseFloat(calcObj.oper2));
  }else if (calcObj.operator == "/") {
    calcObj.product = divide(parseFloat(calcObj.oper1), parseFloat(calcObj.oper2));
  } else {
    return "error";
  };
  delete calcObj.oper1;
  delete calcObj.oper2;
  delete calcObj.operator;
};