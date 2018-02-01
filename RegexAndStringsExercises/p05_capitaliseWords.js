function solve(sentance) {
    console.log(sentance.split(' ').map(x => x.charAt(0).toUpperCase() + x.substring(1).toLowerCase()).join(' '));
}

solve('Was that Easy? tRY thIs onE for SiZe!');