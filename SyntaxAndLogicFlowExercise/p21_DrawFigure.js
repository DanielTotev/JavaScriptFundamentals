function drawShape(n) {
    if (n === 2){
        console.log('+++');
        return;
    }
    let numberOfLines = n % 2 === 0 ? n - 1: n;
    let middleStartAndEndRow = '+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+';
    console.log(middleStartAndEndRow);
    for (let row = 0; row < Math.floor(numberOfLines / 2 - 1); row++){
        console.log('|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|')
    }
    console.log(middleStartAndEndRow);
    for (let row = 0; row < Math.floor(numberOfLines / 2 - 1); row++){
        console.log('|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|')
    }
    console.log(middleStartAndEndRow);
}


drawShape(2);