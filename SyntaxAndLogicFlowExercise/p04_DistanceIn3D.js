function calcDistance(arr) {
    let point1 = {x: arr[0], y: arr[1], z: arr[2]};
    let point2 = {x: arr[3], y: arr[4], z: arr[5]};

    let deltaX = Math.pow(point2.x - point1.x, 2);
    let deltaY = Math.pow(point2.y - point1.y, 2);
    let deltaZ = Math.pow(point2.z - point1.z, 2);

    return Math.sqrt(deltaX + deltaY + deltaZ);
}

console.log(calcDistance([1, 1, 0, 5, 4, 0]));