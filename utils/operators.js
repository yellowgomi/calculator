const add = (num1, num2) => {
  return num1 + num2;
}

const subtract = (num1, num2) => {
  return num1 - num2;
}

const multiple = (num1, num2) => {
  return num1 * num2;
}

const divide = (num1, num2) => {
  if (num2 === 0) return "you cannot divide by 0";
  return Math.round(num1 / num2);
}

const operate = (operation, num1, num2) => {
  switch (operation) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiple(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Invalid operation";
  }
}

export default operate;