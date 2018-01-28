function solve(arr) {
    let desiredAmount = arr[0];
    let cut = x => x -(x * 75 / 100);
    let lap = x => x -((x * 20) / 100);
    let grind = x => x - 20;
    let etch = x => x - 2;
    //let xRay = x => x + 1;
    let transportingAndWashing = x => Math.floor(x);
    for(let i = 1; i < arr.length; i++){
        let microns = arr[i];
        console.log(`Processing chunk ${microns} microns`);
        microns =  execute(microns, cut, 'Cut');
        if(isDone(microns)){
            continue;
        }
        microns =  execute(microns, lap, 'Lap');
        if(isDone(microns)){
            continue;
        }
        microns =  execute(microns, lap, 'Lap');
        if(isDone(microns)){
            continue;
        }
        microns =  execute(microns, grind, 'Grind');
        if(isDone(microns)){
            continue;
        }
        microns =  execute(microns, etch, 'Etch');
        isDone(microns);
    }

    function execute(microns, operation, opName) {
        let newValue = 0;
        let opCounter = 0;
        while (true){
            newValue = operation(microns);
            if(newValue < desiredAmount){
                // if(newValue + 1 === desiredAmount){
                //     microns = newValue;
                //     opCounter++;
                // }
                break;
            }
            microns = newValue;
            opCounter++;
        }
        if(opCounter > 0){
            console.log(`${opName} x${opCounter}`);
            console.log('Transporting and washing');
            microns = transportingAndWashing(microns);
        }
        return microns;
    }

    function isDone(microns) {
        if(microns + 1 === desiredAmount){
            ++microns;
            console.log('X-ray x1');
            console.log(`Finished crystal ${microns} microns`);
            return true;
        }

        if(microns === desiredAmount){
            console.log(`Finished crystal ${microns} microns`);
            return true;
        }
        return false;
    }
}

solve([1000, 4000, 8100]);