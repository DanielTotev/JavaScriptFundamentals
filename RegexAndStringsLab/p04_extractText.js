function extract(text) {
    let result = [];
    let openingBracketIndex = text.indexOf('(');
    let closingBracketIndex = text.indexOf(')');

    while (openingBracketIndex >= 0 && closingBracketIndex >= 0){
        if(openingBracketIndex > closingBracketIndex){
            break;
        }
        result.push(text.substring(openingBracketIndex + 1, closingBracketIndex));
        openingBracketIndex = text.indexOf('(', closingBracketIndex + 1);
        closingBracketIndex = text.indexOf(')', openingBracketIndex + 1);
    }

    console.log(result.join(', '));
}

extract('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');