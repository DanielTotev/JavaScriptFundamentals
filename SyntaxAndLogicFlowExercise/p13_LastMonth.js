function lastMonth(arr) {
    let date = new Date(arr[2], arr[1] - 1, 0);
    console.log(date.getDate());
}

lastMonth([13, 12, 2004]);