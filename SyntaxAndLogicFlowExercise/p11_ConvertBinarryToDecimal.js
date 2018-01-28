function convert(bin) {
    let number = 0;
    bin = bin.split("").reverse().join("");
    for(let i = 0; i < bin.length; i++){
        if(bin[i] == 1){
            number += Math.pow(2, i);
        }
    }
    console.log(number);
}

convert('11110000');