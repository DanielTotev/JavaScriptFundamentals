/**
 *
 * @param arr
 */
function aggregateElements(arr) {

    function aggregate(start, func) {
        let value = start;
        for(let i = 0; i < arr.length; i++){
            value = func(value, arr[i]);
        }
        return value;
    }
    let sum = (a, b) => a + b;
    let anotherSum = (a, b) => a + 1 / b;

    console.log(aggregate(0, sum));
    console.log(aggregate(0, anotherSum));
    console.log(aggregate('', sum));
}

aggregateElements([2, 4, 8, 16]);