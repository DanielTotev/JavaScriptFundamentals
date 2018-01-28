function isPrime(number) {
    if (number < 2){
        return false;
    }
    let boundary = Math.ceil(Math.sqrt(number));
    for(let i = 2; i <= boundary; i++){
        if (i === number){
            continue;
        }
        if(number % i === 0 ){
            return false;
        }
    }
    return true;
}

console.log(isPrime(10));
console.log(isPrime(1));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(4));