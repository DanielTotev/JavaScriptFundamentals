function boxesAndBottles(bottleCount, maxBottlesInOneBox) {
    return Math.ceil(bottleCount / maxBottlesInOneBox);
}

console.log(boxesAndBottles(15, 7));