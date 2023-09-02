const display = document.getElementById('display');

export const addNumToDisplay = (num) => {
  const currentValue = display.innerText;
  display.innerText = currentValue === "0" ? num : currentValue + num;
}

export const addOperatorToDisplay = (operator) => {
  const currentValue = display.innerText;
  display.innerText = currentValue + " " + operator + " ";
}

export const clearDisplay = () => {
  display.innerText = 0;
}
