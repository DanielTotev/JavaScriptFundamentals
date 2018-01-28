function biggestElement(matrix) {
    let max = Number.NEGATIVE_INFINITY;
    for(let row of matrix){
        for (let element of row){
            if(element > max){
                max = element;
            }
        }
    }
    return max;
}

console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));