function censor(text, arr) {
    for(let element of arr){
        let replacement = '-'.repeat(element.length);
        let pattern = new RegExp(`${element}`, 'g');
        text = text.replace(pattern, replacement);
    }
    console.log(text);
}

censor('roses are red, violets are blue', [', violets are', 'red']);