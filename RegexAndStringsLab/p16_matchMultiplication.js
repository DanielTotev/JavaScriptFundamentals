function solve(text) {
    let pattern = /(-?\d+)\s*\*\s*-?(\d+(\.\d+)?)/g;
    text = text.replace(pattern, replacer);

    function replacer(match, gr1, gr2) {
        return Number(gr1) * Number(gr2);
    }

    console.log(text);
}

solve('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');