function match(text){
    let pattern = /\w+/g;
    console.log(text.match(pattern).join('|'));
}

match('A Regular Expression needs to have the global flag in order to match all occurrences in the text');