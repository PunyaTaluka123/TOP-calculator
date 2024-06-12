
let display = document.getElementById('display');
let currentInput = '';

//get Numbers
function appendNumber(number) {
	currentInput += number;
	display.textContent = currentInput;
}
function appendOperator(operator) {
	currentInput += operator;
	display.textContent = currentInput;
}

function clearDisplay() {
	currentInput = '';
	display.textContent = '';
}
function calculate() {
	try {
	  let result = eval(currentInput);
	  display.textContent = result;
	  currentInput = result.toString(); // Update currentInput for continued calculations
	} catch (error) {
	  display.textContent = 'Error';
	}
  }


