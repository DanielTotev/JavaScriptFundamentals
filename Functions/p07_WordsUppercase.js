/**
 *
 * @param input : string
 */
function wordsUppercase(input) {
    let upCase = input.toUpperCase();
    return findWords();
    function findWords() {
        return upCase.split(/\W/).filter(x => x !== '').join(", ");
    }
}


console.log(wordsUppercase("hello"));