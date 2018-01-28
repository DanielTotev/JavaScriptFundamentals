function calculate(num1, num2, operand) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    switch (operand){
        case '+':
            return doOperation(sum);
        case '-':
            return doOperation(subtract);
        case '*':
            return doOperation(multiply);
        case '/':
            return doOperation(divide);
    }


    function doOperation(operation) {
        return operation(num1, num2);
    }
}

console.log(calculate(2, 4, '/'));