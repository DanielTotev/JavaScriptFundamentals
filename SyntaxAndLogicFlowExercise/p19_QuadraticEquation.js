function equation(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    if(d < 0){
        console.log("No");
    }else if(d === 0){
        let x = (b * -1) / (2 * a);
        console.log(x);
    }else {
        let x1 = (b * -1 + Math.sqrt(d)) / (2 * a);
        let x2 = (b * -1 - Math.sqrt(d)) / (2 * a);
        console.log(Math.min(x2, x1));
        console.log(Math.max(x2, x1));
    }
}


equation([5, 2, 1]);