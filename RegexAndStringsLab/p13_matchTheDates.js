function matchDates(arr) {
    let datePattern = /\b(\d{2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    for(let element of arr){
        let date = datePattern.exec(element);
        while (date != null){
            let day = date[1];
            let month = date[2];
            let year = Number(date[3]);
            console.log(`${date[0]} (Day: ${day}, Month: ${month}, Year: ${year})`);
            date = datePattern.exec(element);
        }
    }
}

matchDates(
    [
        'I am born on 30-Dec-1994.',
        'This is not date: 512-Jan-1996.',
        'My father is born on the 29-Jul-1955.'
    ]
);