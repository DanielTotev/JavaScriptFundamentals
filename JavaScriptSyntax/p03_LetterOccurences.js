function countLetterOccurrences(word, letter) {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if(letter === word.charAt(i)){
            counter++;
        }
    }
    return counter;
}

console.log(countLetterOccurrences('hello', 'l'));