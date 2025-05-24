let expression = "";

function append(value) {
  expression += value;
  document.getElementById("display").value = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = "";
}

function backspace() {
  expression = expression.slice(0, -1);
  document.getElementById("display").value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById("display").value = result;
    expression = result.toString();
  } catch {
    document.getElementById("display").value = "Error";
    expression = "";
  }
}

function sqrt() {
  try {
    const result = Math.sqrt(eval(expression));
    document.getElementById("display").value = result;
    expression = result.toString();
  } catch {
    document.getElementById("display").value = "Error";
  }
}

function square() {
  try {
    const result = Math.pow(eval(expression), 2);
    document.getElementById("display").value = result;
    expression = result.toString();
  } catch {
    document.getElementById("display").value = "Error";
  }
}

function percent() {
  try {
    const result = eval(expression) / 100;
    document.getElementById("display").value = result;
    expression = result.toString();
  } catch {
    document.getElementById("display").value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", function (e) {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.', '(', ')'].includes(e.key)) {
    append(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    backspace();
  }
});
