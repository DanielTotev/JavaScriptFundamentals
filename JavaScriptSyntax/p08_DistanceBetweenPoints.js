function calcDistance(x1, y1, x2, y2) {
    let firstPoint = {x : x1, y: y1};
    let secondPoint = {x : x2, y: y2};
    return Math.sqrt(Math.pow(secondPoint.x - firstPoint.x, 2) + Math.pow(secondPoint.y - firstPoint.y, 2));
}


console.log(calcDistance(2.34, 15.66, -13.55, -2.9985));