function solve(arr) {
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    for(let element of arr){
        let match = regex.exec(element);
        if(match){
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }
    }
}

solve(
    [
        'Isacc - 1000 - CEO',
        'Ivan - 500 - Employee',
        'Peter - 500 - Employee'
    ]
);