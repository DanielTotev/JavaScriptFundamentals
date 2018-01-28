function drawSquare(n = 5) {
    for (let i = 1; i <= n; i++){
        drawLine(i);
    }


    function drawLine(count) {
        console.log('*' + ' *'.repeat(n - 1));
    }
}

drawSquare(10);