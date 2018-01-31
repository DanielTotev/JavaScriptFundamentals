function concat(arr) {
    console.log(arr.reverse().map(x => x.split('').reverse().join('')).reduce((a, b) => a + b));
}

concat(['I', 'am', 'a', 'student']);