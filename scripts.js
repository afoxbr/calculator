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
const addButt = document.getElementById("add");
const subtractButt = document.getElementById("subtract");
const multiplyButt = document.getElementById("multiply");
const divideButt = document.getElementById("divide");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const decimal = document.getElementById("decimal");

const calcObj = {};

function add(a, b) {
  console.log(a);
  console.log(b);
  let c = a + b;
  let d = c.toFixed(2);
  console.log(d);
  return parseFloat(d);
};

function subtract(a, b) {
  let c = a - b;
  let d = c.toFixed(2);
  return parseFloat(d);
};

function multiply(a, b) {
  let c = a * b;
  let d = c.toFixed(2);
  return parseFloat(d);
};

function divide(a, b) {
  if (oper2 == 0) {
    return "Absolutely not.";
  } else {
    let c = a / b;
    let d = c.toFixed(2);
    return parseFloat(d);
  };
};

function operate() {
  calcObj.oper1 = parseFloat(calcObj.oper1);
  calcObj.oper2 = parseFloat(calcObj.oper2);
  if (calcObj.operator == "+") {
    calcObj.product = add(calcObj.oper1, calcObj.oper2);
  } else if (calcObj.operator == "-") {
    calcObj.product = subtract(calcObj.oper1, calcObj.oper2);
  } else if (calcObj.operator == "*") {
    calcObj.product = multiply(calcObj.oper1, calcObj.oper2);
  } else if (calcObj.operator == "/") {
    calcObj.product = divide(calcObj.oper1, calcObj.oper2);
  } else {
    return "error";
  };
  delete calcObj.oper1;
  delete calcObj.oper2;
  delete calcObj.operator;
  display.textContent = calcObj.product;
};

num1.addEventListener("click", () => {
  display.textContent += "1";
  if (!("operator" in calcObj)) {
    if (!("oper1" in calcObj)) {
      calcObj.oper1 = "1";
    } else {
      calcObj.oper1 += "1";
    };
  } else if (("operator" in calcObj)) {
    if (!("oper2" in calcObj)) {
      calcObj.oper2 = "1";
    } else {
      calcObj.oper2 += "1";
    };
  };
});

num2.addEventListener("click", () => {
  display.textContent += "2";
  if (!("operator" in calcObj)) {
    if (!("oper1" in calcObj)) {
      calcObj.oper1 = "2";
    } else {
      calcObj.oper1 += "2";
    };
  } else if (("operator" in calcObj)) {
    if (!("oper2" in calcObj)) {
      calcObj.oper2 = "2";
    } else {
      calcObj.oper2 += "2";
    };
  };
});

num3.addEventListener("click", () => {
  display.textContent += "3";
  if (!("operator" in calcObj)) {
    if (!("oper1" in calcObj)) {
      calcObj.oper1 = "3";
    } else {
      calcObj.oper1 += "3";
    };
  } else if (("operator" in calcObj)) {
    if (!(calcObj.oper2 in calcObj)) {
      calcObj.oper2 = "3";
    } else {
      calcObj.oper2 += "3";
    };
  };
});

num4.addEventListener("click", () => {
  display.textContent += "4";
  if (!("operator" in calcObj)) {
    if (!("oper1" in calcObj)) {
      calcObj.oper1 = "4";
    } else {
      calcObj.oper1 += "4";
    };
  } else if (("operator" in calcObj)) {
    if (!("oper2" in calcObj)) {
      calcObj.oper2 = "4";
    } else {
      calcObj.oper2 += "4";
    };
  };
});

num5.addEventListener("click", () => {
  display.textContent += "5";
  if (!("operator" in calcObj)) {
    if (!("oper1" in calcObj)) {
      calcObj.oper1 = "5";
    } else {
      calcObj.oper1 += "5";
    };
  } else if (("operator" in calcObj)) {
    if (!("oper2" in calcObj)) {
      calcObj.oper2 = "5";
    } else {
      calcObj.oper2 += "5";
    };
  };
});

num6.addEventListener("click", () => {
  display.textContent += "6";
  if (!("operator" in calcObj)) {
    if (!("oper1" in calcObj)) {
      calcObj.oper1 = "6";
    } else {
      calcObj.oper1 += "6";
    };
  } else if (("operator" in calcObj)) {
    if (!("oper2" in calcObj)) {
      calcObj.oper2 = "6";
    } else {
      calcObj.oper2 += "6";
    };
  };
});

num7.addEventListener("click", () => {
  display.textContent += "7";
  if (!("operator" in calcObj)) {
    if (!("oper1" in calcObj)) {
      calcObj.oper1 = "7";
    } else {
      calcObj.oper1 += "7";
    };
  } else if (("operator" in calcObj)) {
    if (!("oper2" in calcObj)) {
      calcObj.oper2 = "7";
    } else {
      calcObj.oper2 += "7";
    };
  };
});

num8.addEventListener("click", () => {
  display.textContent += "8";
  if (!("operator" in calcObj)) {
    if (!("oper1" in calcObj)) {
      calcObj.oper1 = "8";
    } else {
      calcObj.oper1 += "8";
    };
  } else if (("operator" in calcObj)) {
    if (!("oper2" in calcObj)) {
      calcObj.oper2 = "8";
    } else {
      calcObj.oper2 += "8";
    };
  };
});

num9.addEventListener("click", () => {
  display.textContent += "9";
  if (!("operator" in calcObj)) {
    if (!("oper1" in calcObj)) {
      calcObj.oper1 = "9";
    } else {
      calcObj.oper1 += "9";
    };
  } else if (("operator" in calcObj)) {
    if (!("oper2" in calcObj)) {
      calcObj.oper2 = "9";
    } else {
      calcObj.oper2 += "9";
    };
  };
});

num0.addEventListener("click", () => {
  display.textContent += "0";
  if (!("operator" in calcObj)) {
    if (!("oper1" in calcObj)) {
      calcObj.oper1 = "0";
    } else {
      calcObj.oper1 += "0";
    };
  } else if (("operator" in calcObj)) {
    if (!("oper2" in calcObj)) {
      calcObj.oper2 = "0";
    } else {
      calcObj.oper2 += "0";
    };
  };
});

decimal.addEventListener("click", () => {
  display.textContent += ".";
  if (!("operator" in calcObj)) {
    if (!("oper1" in calcObj)) {
      calcObj.oper1 = "0.";
    } else {
      calcObj.oper1 += ".";
    };
  } else if (("operator" in calcObj)) {
    if (!("oper2" in calcObj)) {
      calcObj.oper2 = "0.";
    } else {
      calcObj.oper2 += "."
    };
  };
});

addButt.addEventListener("click", () => {
  display.textContent += "+";
  if (!(calcObj.operator in calcObj)) {
    calcObj.operator = "+";
  } else if (calcObj.operator in calcObj) {
    operate(calcObj);
    calcObj.oper1 = calcObj.product;
    calcObj.operator = "+";
  };
});

subtractButt.addEventListener("click", () => {
  display.textContent += "-";
  if (!(calcObj.operator in calcObj)) {
    calcObj.operator = "-";
  } else if (calcObj.operator in calcObj) {
    operate(calcObj);
    calcObj.oper1 = calcObj.product;
    calcObj.operator = "-";
  };
});

divideButt.addEventListener("click", () => {
  display.textContent += "/";
  if (!(calcObj.operator in calcObj)) {
    calcObj.operator = "/";
  } else if (calcObj.operator in calcObj) {
    operate(calcObj);
    calcObj.oper1 = calcObj.product;
    calcObj.operator = "/";
  };
});

multiplyButt.addEventListener("click", () => {
  display.textContent += "*";
  if (!(calcObj.operator in calcObj)) {
    calcObj.operator = "*";
  } else if (calcObj.operator in calcObj) {
    operate(calcObj);
    calcObj.oper1 = calcObj.product;
    calcObj.operator = "*";
  };
});

equals.addEventListener("click", () => {
  operate();
});

clear.addEventListener("click", () => {
  delete calcObj.oper1;
  delete calcObj.oper2;
  delete calcObj.operator;
  delete calcObj.product;
  display.textContent = "";
});