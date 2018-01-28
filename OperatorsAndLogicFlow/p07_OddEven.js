function oddOrEven(num) {
    let reminder = num % 2;

    if(Math.round(num) !== num){
        console.log("invalid");
        return;
    }

    console.log(reminder === 0 ? "even" : "odd");
}

oddOrEven(-3);