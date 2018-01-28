function solve(arr) {
    let result = [];
    for(let number of arr){
        if(number < 0){
            result.unshift(number);
        }else {
            result.push(number);
        }
    }
    return result.join("\n");
}

console.log(solve([3, -2, 0, -1]));


let arr = [10 , 20, 30, 4, 5];
arr.splice(-1, 2);
console.log(arr);