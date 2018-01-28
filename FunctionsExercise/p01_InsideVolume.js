function solveProblem(arr) {
    for (let i = 0; i < arr.length; i+=3) {
        let x = arr[i];
        let y = arr[i + 1];
        let z = arr[i + 2];
        if(isInside(x, y, z)){
            console.log('inside')
        }else {
            console.log('outside');
        }
    }

    function isInside(x, y, z) {
        let [xMin, xMax, yMin, yMax, zMin, zMax] = [10, 50, 20, 80, 15, 50];
        return (x >= xMin && x <= xMax) &&(y >= yMin && y <= yMax) && (z >= zMin && z <= zMax);
    }
}


solveProblem([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);