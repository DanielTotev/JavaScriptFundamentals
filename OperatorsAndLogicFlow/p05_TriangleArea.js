function area(a ,b, c) {
    let semiPerimeter = (a + b + c) / 2;
    console.log(Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)));
}

area(2, 3.5, 4);