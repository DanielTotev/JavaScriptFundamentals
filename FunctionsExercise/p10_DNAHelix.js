function draw(size) {
    let pairCounter = 1;
    let lineCounter = 1;
    for(let i = 0; i < size; i++ ){
        if(lineCounter > 4)
            lineCounter = 1;
        if(pairCounter > 5)
            pairCounter = 1;

        let pair = getPair(pairCounter);
        printLine(lineCounter, pair[0], pair[1]);
        lineCounter++;
        pairCounter++;
    }

    function getPair(pairCounter) {
        switch (pairCounter){
            case 1:
                return ['A', 'T'];
            case 2:
                return ['C', 'G'];
            case 3:
                return ['T', 'T'];
            case 4:
                return ['A', 'G'];
            case 5:
                return ['G', 'G'];
        }
    }


    function printLine(lineCounter, s1, s2) {
        switch (lineCounter){
            case 1:
                console.log(`**${s1}${s2}**`);
                break;
            case 2:
                console.log(`*${s1}--${s2}*`);
                break;
            case 3:
                console.log(`${s1}----${s2}`);
                break;
            case 4:
                console.log(`*${s1}--${s2}*`);
                break;
        }
    }
}

draw(21);