function modify(num) {
    num = num.toString();
    let averageDigitSum = getAverageDigitSum(num);
    while (averageDigitSum <= 5){
        num += '9';
        averageDigitSum = getAverageDigitSum(num);
    }
    return Number(num);


    function getAverageDigitSum(numberAsString) {
        let sum = 0;
        for(let i = 0; i < numberAsString.length; i++){
            sum += parseInt(numberAsString[i]);
        }
        return sum / numberAsString.length;
    }
}

console.log(modify(5835));