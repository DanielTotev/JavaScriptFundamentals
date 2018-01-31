function bill(arr) {
    let sum = 0;
    let products = [];

    arr.forEach((e, i) => {
        if( i % 2 === 0){
            products.push(e);
        }else {
            sum += Number(e);
        }
    });

    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`)
}

bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);

bill(['Cola', '1.35', 'Pancakes', '2.88']);