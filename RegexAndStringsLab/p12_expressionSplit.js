function split(text) {
    let splitPattern = /[().,;\s]+/g;
    console.log(text.split(splitPattern).filter(x => x.length > 0).join('\n'));
}

split('let sum = 4 * 4,b = "wow";');
split('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');