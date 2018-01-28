function checkValidity(arr) {
    let point1 = {x:arr[0], y:arr[1]};
    let point2 = {x:arr[2], y:arr[3]};
    let startPoint = {x:0, y:0};

    function calculateDistance(pointA, pointB) {
        return Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2));
    }

    let distanceFromFirstPointToStart = calculateDistance(point1, startPoint);
    if(parseInt(distanceFromFirstPointToStart) === distanceFromFirstPointToStart){
        console.log(`{${point1.x}, ${point1.y}} to {0, 0} is valid`);
    }else {
        console.log(`{${point1.x}, ${point1.y}} to {0, 0} is invalid`);
    }

    let distanceFromSecondPointToStart = calculateDistance(point2, startPoint);
    if(parseInt(distanceFromSecondPointToStart) === distanceFromSecondPointToStart){
        console.log(`{${point2.x}, ${point2.y}} to {0, 0} is valid`);
    }else {
        console.log(`{${point2.x}, ${point2.y}} to {0, 0} is invalid`);
    }

    let distanceBetweenTwoPoints = calculateDistance(point1, point2);
    if(parseInt(distanceBetweenTwoPoints) === distanceBetweenTwoPoints){
        console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is valid`);
    }else {
        console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is invalid`);
    }
}

checkValidity([2, 1, 1, 1]);