function countOccurrences(target, text) {
    let counter = 0;
    let index= text.indexOf(target);

    while (index > 0){
        counter++;

        index = text.indexOf(target, index + 1);
    }

    console.log(counter);
}

countOccurrences('the', 'I am the one yeah.');