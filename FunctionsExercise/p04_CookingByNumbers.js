function cook(arr) {
    let number = arr[0];
    for(let i = 1; i < arr.length; i++){
        let operation = arr[i];
        switch (operation.toLowerCase()){
            case 'chop':
                number = div(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number = increment(number);
                break;
            case 'bake':
                number = multiply(number);
                break;
            case 'fillet':
                number = subtract(number);
                break
        }
        console.log(number);
    }

    function div(number) {
        return number / 2;
    }

    function increment(number) {
        return number + 1;
    }

    function multiply(number) {
        return number * 3;
    }

    function subtract(number) {
        number -= (number * 20) / 100;
        return number;
    }

}

cook([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);