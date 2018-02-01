function solve(text) {
    console.log(text.match(/\b_[a-zA-Z0-9]+\b/g).map(x => x.substring(1)).join(','));
}

solve('__invalidVariable _evenMoreInvalidVariable_ _validVariable');
solve('The _id and _age variables are both integers.');