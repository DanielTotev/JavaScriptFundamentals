function solve(arr) {
    console.log(arr.join('\n').match(/\d+/g).join(' '));
}

solve(
    [
        'The300',
        'What is that?',
        'I think it’s the 3rd movie.',
        'Lets watch it at 22:45'

]
);