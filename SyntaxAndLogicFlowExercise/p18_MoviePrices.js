function moviePrices(arr) {
    let movieName = arr[0].toLowerCase();
    let dayOfWeek = arr[1].toLowerCase();
    let price = "error";
    if(movieName === 'the godfather'){
        switch (dayOfWeek){
            case "monday":
                price = 12;
                break;
            case "tuesday":
                price = 10;
                break;
            case "wednesday":
                price = 15;
                break;
            case "thursday":
                price = 12.50;
                break;
            case "friday":
                price = 15;
                break;
            case "saturday":
                price = 25;
                break;
            case "sunday":
                price = 30;
                break
        }
    }else if (movieName === 'schindler\'s list'){
        switch (dayOfWeek){
        case "monday":
            price = 8.50;
            break;
        case "tuesday":
            price = 8.50;
            break;
        case "wednesday":
            price = 8.50;
            break;
        case "thursday":
            price = 8.50;
            break;
        case "friday":
            price = 8.50;
            break;
        case "saturday":
            price = 15;
            break;
        case "sunday":
            price = 15;
            break
        }
    }else if (movieName === 'casablanca'){
        switch (dayOfWeek){
            case "monday":
                price = 8;
                break;
            case "tuesday":
                price = 8;
                break;
            case "wednesday":
                price = 8;
                break;
            case "thursday":
                price = 8;
                break;
            case "friday":
                price = 8;
                break;
            case "saturday":
                price = 10;
                break;
            case "sunday":
                price = 10;
                break
        }
    }else if (movieName === 'the wizard of oz'){
        switch (dayOfWeek){
            case "monday":
                price = 10;
                break;
            case "tuesday":
                price = 10;
                break;
            case "wednesday":
                price = 10;
                break;
            case "thursday":
                price = 10;
                break;
            case "friday":
                price = 10;
                break;
            case "saturday":
                price = 15;
                break;
            case "sunday":
                price = 15;
                break
        }
    }
    return price;
}