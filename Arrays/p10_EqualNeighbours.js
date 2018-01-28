function findEqualPairs(matrix) {
    let counter = 0;
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if(matrix[row][col + 1] === matrix[row][col]){
                //console.log('po red' + matrix[row][col + 1] + " " + matrix[row][col]);
                counter++;
            }
            if(row < matrix.length - 1){
                if(matrix[row][col] === matrix[row + 1][col]) {
                    //console.log('po kolona' + matrix[row][col] + " " + matrix[row + 1][col]);
                    counter++;
                }
            }
        }
    }
    return counter;
}

// console.log(findEqualPairs([['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']]
// ));
//
// console.log(findEqualPairs([['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']]
// ));

console.log(findEqualPairs([[2,2,5,7,4],
    [4,0,5,3,4],
    [2,5,5,4,2]]));