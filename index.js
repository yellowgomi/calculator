import operate from "./utils/operators.js";
import { addNumToDisplay, clearDisplay, addOperatorToDisplay } from "./utils/display.js";

const num1 = 0;
const num2 = 0;
const operation = "+";

// populate numbers to display
const numberEls = document.querySelectorAll(".number");
numberEls.forEach( el => {
  el.onclick = () => {
    const num = Number(el.innerText);
    addNumToDisplay(num);
  }
})

// populate operators to display
const operatorEls = document.querySelectorAll(".operator");
operatorEls.forEach( el => {
  el.onclick = () => {
    const operator = el.innerText;
    addOperatorToDisplay(operator);
  }
})

// clear display when AC is clicked
const clearEl = document.querySelector(".clear");
clearEl.onclick = () => {
  clearDisplay();
}

// calculate when = is clicked
const equalEl = document.querySelector(".equal");
equalEl.onclick = () => {
  const display = document.getElementById('display');
  const currentValue = display.innerText;
  const valueList = currentValue.split(" ");
  while (valueList.length > 1) {
    const [num1, operation, num2] = valueList.splice(0, 3);
    const result = operate(operation, Number(num1), Number(num2));
    valueList.unshift(result);
  }
  display.innerText = valueList[0];
}