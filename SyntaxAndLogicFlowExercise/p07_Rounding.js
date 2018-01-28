function rounding(arr) {
    let numberToRound = arr[0];
    let numberOfDigits = arr[1] <= 15 ? arr[1] : 15;
    let specialNumber= Math.pow(10, numberOfDigits);
    console.log(Math.round(numberToRound * specialNumber) / specialNumber);
}

rounding([10.5, 3]);
