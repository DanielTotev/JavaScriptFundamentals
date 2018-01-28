function convert(number) {
    let foot = Math.floor(number / 12);
    let inches = number - foot * 12;
    console.log(`${foot}'-${inches}"`);
}

convert(55);