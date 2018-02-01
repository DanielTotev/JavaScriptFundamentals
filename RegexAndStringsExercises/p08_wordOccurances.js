function solve(text, word) {
    let regex = new RegExp('\\b' + word + '\\b', 'gi');
    let counter = 0;

    while (regex.exec(text)){
        counter++;
    }

    console.log(counter);
}

solve('The waterfall was so high, that the child couldn’t see its peak.', 'the');