function compoundInterest(arr) {
    let principalSum = arr[0];
    let interestRate = arr[1];
    let compoundingPeriodInMonths = arr[2];
    let timesSpanInYears = arr[3];

    interestRate /= 100;
    let compoundingFrequency = 12 / compoundingPeriodInMonths;
    let  f = principalSum * Math.pow((1 + interestRate / compoundingFrequency), compoundingFrequency * timesSpanInYears);
    return f.toFixed(2);
}


console.log(compoundInterest([100000, 5, 12, 25]));