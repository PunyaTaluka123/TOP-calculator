function subtract(num1, num2){
    return num1-num2
}
function divide(num1, num2){
    if (num2===0){
        return 'No'
    }
    return num1/num2
}
function multiply(num1, num2){
    return num1*num2
}

function add(num1, num2) {
    return num1 + num2;
}
function calculate(num1, num2, operator){
    switch(operator){
        case '+':
            console.log(add(num1, num2))
            return
        case '-':
            console.log(subtract(num1, num2))
            return
        case '*':
            console.log(multiply(num1, num2))
        case "/":
            console.log(divide(num1, num2))
            return
    }
}
function getNumber(num){
    return Number(num)
}
function getOperator(op){
    return op
}

calculate(getNumber, getNumber,getOperator, )