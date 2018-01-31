function solve(arr) {
    let towns = [];
    let sum = 0;

    for(let row of arr){
        let [town, number] = row.split('|').filter(x => x !== '').map(x => x.trim());
        number = Number(number);
        sum += number;
        towns.push(town);
    }

    console.log(towns.join(', '));
    console.log(sum);
}

solve(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);