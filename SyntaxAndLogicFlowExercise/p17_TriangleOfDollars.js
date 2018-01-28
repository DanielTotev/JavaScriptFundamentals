function draw(n) {
    for(let row = 0; row < n; row++){
        let  line = '';
        for(let col = 0; col < row + 1; col++ ){
            line += '$';
        }
        console.log(line);
    }
}

draw(3);