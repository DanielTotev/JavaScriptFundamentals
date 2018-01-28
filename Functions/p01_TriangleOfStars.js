function drawTriangle(n) {
    // draw upper part
    for (let  i = 1; i <= n; i++ ){
        drawLine(i);
    }
    // draw bottom part
    for (let i = n - 1; i >= 1; i--){
        drawLine(i);
    }

    function drawLine(count) {
        console.log("*".repeat(count))
    }
}


drawTriangle(3);