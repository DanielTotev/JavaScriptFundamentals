function solve(size, k) {
    let array = [];
    array.push(1);
    for (let i = 1; i < size; i++){
        let counter = Math.min(k, i);
        let sum = 0;
        let index = array.length - 1;
        while (counter > 0){
            sum += array[index];
            counter--;
            index--;
        }
        array.push(sum);
    }
    return array.join(' ');
}

console.log(solve(8, 2));