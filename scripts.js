let display = document.getElementById("display");
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

display.textContent = "0";

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
  if (oper2 == "0"){
    return "Absolutely not.";
  } else {
    return (a / b);
  };
};

function operate(calcObj){
  if (operator == "+") {
    return add(calcObj.oper1, calcObj.oper2);
  } else if (operator == "-") {
    return subtract(calcObj.oper1, calcObj.oper2);
  } else if (operator == "*") {
    return multiply(calcObj.oper1, calcObj.oper2);
  }else if (operator == "/") {
    return divide(calcObj.oper1, calcObj.oper2);
  } else {
    return "error";
  };
};